const About = () => {
  return (
    <div className="container my-2" >
      <h1>About iNotebook</h1>
      <p>Welcome to iNotebook, your personal note-taking app.</p>
      <p>iNotebook allows you to easily create, update, and organize your notes, helping you stay organized and productive.</p>
      <h2>Key Features</h2>
      <ul>
        <li>User Registration and Login: Create a new account or login to your existing account to access your notes.</li>
        <li>Create New Notes: Write and save your thoughts, ideas, and important information in the app.</li>
        <li>Edit Notes: Make changes and updates to your existing notes as needed.</li>
        <li>Delete Notes: Remove any notes that are no longer needed.</li>
      </ul>
      <h2>How to Use iNotebook</h2>
      <ol>
        <li>Sign Up: If you are a new user, click on the "Sign Up" button and provide the required information to create your account.</li>
        <li>Login: If you already have an account, enter your credentials (email and password) and click on the "Login" button to access your notes.</li>
        <li>Create a New Note: Once logged in, click on the "New Note" button to create a new note. Enter the title and content of your note and click "Save" to store it.</li>
        <li>Edit a Note: To edit an existing note, click on the note you wish to modify. Update the title or content as needed and click "Save" to save the changes.</li>
        <li>Delete a Note: To delete a note, select the note you want to remove and click on the "Delete" button.</li>
      </ol>
      <p>Start using iNotebook today and experience the convenience of having all your important notes in one place!</p>
    </div>
  );
};

export default About;