# Milestone 3️⃣ Requirements

## 🎯 Objective:
Define the foundational requirements of your web application by identifying its motivation, target users, and key functional and non-functional requirements. Develop clear and actionable wireframes to visually represent the system's layout and functionality.

## 🥋 Instructions:

### 1. Motivation:
- Provide a brief description (1–2 paragraphs) of the main motivation behind your project.
  - What problem does your application aim to solve?
  - Why is this problem worth solving, and who benefits from your solution?

### 2. Define Target Users:
- Identify the user categories of your web application.
  - For each category (e.g., Admin, Regular User, Guest), provide a short description of their characteristics, roles, and how they will interact with the application.
  - Example:
    - Admin: Responsible for managing user accounts and system settings.
    - Regular User: Can create an account, log in, and access features like browsing and purchasing items.

### 3. Requirements Modeling:
Develop a list of requirements for your application, divided into the following categories:

#### a. Functional Requirements:
- Describe what the **system must do**—the specific actions and capabilities it must support for users. These should be defined based on the roles identified in your project.
- Provide a list of key functionalities for each user type.
- Each role should have at least `1 × the number of team members functionalities`. For example, if your team has 5 members, each role should have at least 5 functionalities. If your team has 6 members, each role should have 6 functionalities, and so on.
- Example Functional Requirements with Steps. Each functionality should include a textual description of the normal flow to explain how it works in practice:
  - Admin Functionalities
      - Manage User Accounts:
          1. Admin logs into the system using valid credentials.
          2. Admin navigates to the "User Management" section.
          3. A list of registered users is displayed.
          4. Admin selects a user and chooses to edit or delete the account.
          5. If editing, Admin updates the user's details and clicks "Save."
          6. The system validates inputs and updates the database.
          7. Admin receives a success confirmation.
      - Admin accesses the "Settings" page:
          1. The system displays configurable options (e.g., password policies, email notifications).
          2. Admin modifies settings and clicks "Save Changes."
          3. The system validates and applies the changes.
          4. A confirmation message is displayed.
      - and so on..
  - Regular User Functionalities:
      - User Registration
          1. User navigates to the "Sign Up" page.
          2. User enters personal details (e.g., name, email, password).
          3. System validates the input fields (e.g., password strength, unique email).
          4. If validation passes, the system stores user data securely.
          5. The system sends a confirmation email with an activation link.
          6. User clicks the link to activate the account.
          7. User receives a success message and can log in.
      - Browse and Search Products:
          1. User logs in and navigates to the homepage.
          2. The system displays available products.
          3. User enters keywords in the search bar.
          4. The system filters and displays relevant results.
          5. User clicks on a product to view details.
      - and so on..
  - Guest User Functionalities
      - Browse Website:
          1. Guest visits the homepage.
          2. The system displays general content.
          3. Guest navigates through categories without needing an account.
      - Sign Up for an Account:
          1. Guest clicks "Sign Up."
          2. System redirects to the registration page.
          3. Guest follows the User Registration steps described above.
      - and so on..

📌 Note: Each functionality should include:
  - A normal flow of actions (step-by-step process).
  - Validation points (e.g., checking unique email during registration).
  - System responses (e.g., confirmation messages, database updates).

#### b. Non-Functional Requirements:
- Specify the quality attributes and constraints of the system, such as:
  - Performance: Response time under a specific load.
  - Usability: User-friendly design for the target audience.
  - Security: Data protection and user authentication.
  - Compatibility: Browser and device responsiveness.
- Include any external constraints, such as APIs, tools, or frameworks to be used.

### 4. Wireframe Development:
To ensure a clear visualization of your system's layout and functionality, you are required to create medium-fidelity wireframes that go beyond basic sketches. These wireframes should provide sufficient details on screen structure, interactions, and components, without focusing on final colors or styling.

#### Requirements for Wireframes:
- **Medium-Fidelity Prototypes**: Your wireframes should not be simple sketches; they must contain structured screen elements, defined content placement, and interaction flow.  
- **Screen Structure and Components**: Each wireframe should clearly define **UI components** (e.g., buttons, input fields, navigation bars, modals).  
- **Interactions and Content Flow**: Indicate key interactions, such as **clickable areas, input fields, dropdowns, or modal pop-ups** that will be part of the user experience. Use **annotations** to clarify how users interact with each element.  
- **Platform Versions**: At this point, you only need to create **either a desktop or mobile version**—not both. Ensure consistency across screens.  
- **Number of Wireframes**:  
  - **Minimum: One wireframe per team member** (e.g., a team of 4 needs at least 4 wireframes, a team of 6 needs at least 6).  
  - Each wireframe should cover a **main functionality** of the system (based on your predefined main functionalities).

##### Suggested Structure for Wireframes:
Your wireframes should cover essential workflows and functionalities of the system, for example:
1. **Login / Sign-up Page** – Displays input fields, validation messages, and submission button interactions.  
2. **Dashboard / Home Page** – Main landing screen with navigation, content sections, and user actions.  
3. **Feature-Specific Pages** – Screens representing core functionalities, such as:  
   - Product listing (for e-commerce apps)  
   - User profile settings  
   - File uploads (for document-based systems)  
   - Analytics dashboard (for admin panels)  
4. **Form and Submission Screens** – Show field inputs, form validation, and submission interactions.  
5. **Confirmation / Feedback Screens** – Success messages, error handling, and system responses.

Note:
- Use **Figma** to design your wireframes.
- Make sure the design is able to be preview and operate on the Figma  

### 5. Submission Guidelines:
- Prepare a single PDF document that includes:
  1. Project Motivation: Brief description (1–2 paragraphs).
  2. User Categories: List and descriptions of each user type.
  3. Requirements:
     - Functional requirements.
     - Non-functional requirements and constraints.
  4. Wireframes: Clear sketches or digital designs covering all main parts of the system. Put the Figma's URL here so we are able to evaluate easily
- Submit the PDF via Blackboard under the designated submission area.

### Late Submission Policy:
- Late submissions are not allowed unless there is a valid execuse.

## 📊 Grading Rubric:
The submission will be graded out of 100 points, divided as follows:

| **Criteria (Points)** | **Excellent (90-100%)** | **Very Good (80-89%)** | **Good (70-79%)** | **Acceptable (60-69%)** | **Poor (0-59%)** |
|-----------------------|-------------------------|------------------------|-------------------|-------------------------|------------------|
| **Project Motivation (5)** | Problem statement is exceptionally clear, well-justified, and directly addresses a signicant issue. | Problem statement is clear and justied, with minor gaps in reasoning or detail. | Problem statement is somewhat clear but lacks depth or strong justication. | Problem statement is vague or weakly justified. | Problem statement is unclear, irrelevant, or missing. |
| **Functional Requirements (25)** | Comprehensive, well-structured list covering all necessary system functionalities, ensuring clarity and completeness. | Covers all major functionalities with minor omissions or lack of detail in some areas. | Most functionalities are listed, but some critical ones are missing or unclear. | Basic functional requirements provided, but with significant gaps or inconsistencies. | Functional requirements are missing, poorly structured, or lack relevance. |
| **Non-functional Requirements (20)** | Clearly defines all key non-functional aspects (e.g., performance, security, constraints) with strong justification. | Covers most relevant non-functional requirements but lacks some depth or explanation. | Some non-functional aspects are defined, but others are vague or incomplete. | Non-functional requirements are minimal, with unclear relevance or weak justification. | Non-functional requirements are missing, unclear, or entirely irrelevant. |
| **Wireframe Completeness (20)** | Wireframes cover **all core screens, interactions, and workflows**, including normal, error, and edge cases. | Wireframes cover most key screens and interactions but lack some edge cases or alternate flows. | Wireframes include essential screens but **miss several critical interactions or key UI components**. | Wireframes are incomplete, covering only **basic** screens with major missing elements. | Wireframes are missing or fail to depict the system meaningfully. |
| **Actionable Wireframe Implementation (25)** | Wireframes **map directly to functional requirements**, ensuring a smooth transition to UI/UX design and development. Includes user flows, button behaviors, form inputs, and interactive elements. | Wireframes mostly align with functional requirements but miss **minor interactive details**. | Wireframes align with some functional requirements but **lack detailed interactive flows** or key UI/UX elements. | Wireframes **loosely** represent functional requirements, requiring **significant interpretation** to implement. | Wireframes **do not** align with functional requirements or are completely unstructured. |
| **Peer Review Submission (5)**| Peer review is submitted on time, with constructive and detailed feedback provided for other groups. | Peer review is submitted on time, with helpful but slightly less detailed feedback. | Peer review is submitted but lacks depth or significant constructive feedback. | Peer review is minimally completed, with little useful feedback provided. | Peer review is missing, incomplete, or submitted late without justification. |