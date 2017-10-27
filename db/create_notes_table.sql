CREATE TABLE IF NOT EXISTS notes (
    note_id SERIAL PRIMARY KEY,
    note_title varchar(100),
    note_message text,
    note_user integer
)

-- Datatypes in databases are used to describe what kind of information is going to be passed in from the
-- front end to the back end of the application. This will effect how you have to scrub data, what can be automatically 
-- generated in the back end, and how many characters can be passed through fields. I chose serial for my note_id so that no matter
-- what an id would be automatically generated when a note is created and no duplicates would ever be created. I needed a unique
-- identifier for being able to ensure I get the correct note to display, edit, or delete. Text was chosen for the note_message field
-- so that the note wouldn't be limited in the amount of characters it could hold. This builds in the potential for longer notes without
-- needing to worry about running out of space for the user.