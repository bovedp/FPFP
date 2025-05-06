/*
  # Create contact form submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, nullable)
      - `service` (text, nullable)
      - `message` (text)
      - `created_at` (timestamp with timezone)
      - `status` (text, default 'new')

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for authenticated users to read submissions
    - Add policy for anon/authenticated users to create submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to create submissions
CREATE POLICY "Anyone can create contact submissions"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can view submissions
CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);