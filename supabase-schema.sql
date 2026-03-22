-- User profiles (extends Supabase auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text not null default '',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- User progress (scores, XP, streaks, etc.)
create table public.progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  xp integer default 0,
  streak integer default 0,
  last_practice_date text,
  today_exercises integer default 0,
  today_date text,
  scores jsonb default '{}'::jsonb,
  exam_history jsonb default '[]'::jsonb,
  vocab jsonb default '[]'::jsonb,
  achievements jsonb default '{}'::jsonb,
  tips_shown jsonb default '{}'::jsonb,
  confidence jsonb default '{}'::jsonb,
  settings jsonb default '{}'::jsonb,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id)
);

-- Enable Row Level Security
alter table public.profiles enable row level security;
alter table public.progress enable row level security;

-- Profiles policies
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Progress policies
create policy "Users can view own progress"
  on public.progress for select
  using (auth.uid() = user_id);

create policy "Users can update own progress"
  on public.progress for update
  using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on public.progress for insert
  with check (auth.uid() = user_id);

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', ''));

  insert into public.progress (user_id)
  values (new.id);

  return new;
end;
$$ language plpgsql security definer;

-- Trigger on new user
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
