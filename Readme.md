<h1>📄 Employee Shift Board</h1>

<p><strong>Assignment Name:</strong> Employee Shift Board</p>
<p><strong>Role:</strong> Full Stack Developer</p>
<p><strong>Goal:</strong> Mini HR Utility to manage employee shifts with real-world constraints.</p>

<hr/>

<h2>🎯 Objective</h2>
<ul>
  <li>Secure authentication using JWT</li>
  <li>Admin-controlled shift management</li>
  <li>Users can view only their own shifts</li>
  <li>Enforce business rules like shift overlap prevention and minimum working hours</li>
</ul>

<hr/>

<h2>🔧 Core Features</h2>

<h3>Authentication & Authorization</h3>
<ul>
  <li>JWT-based login system</li>
  <li>Role-based access control (Admin / User)</li>
  <li>Protected routes (frontend & backend)</li>
</ul>

<h3>Employee Shift Board</h3>

<p><strong>Employee Fields:</strong></p>
<ul>
  <li>Name</li>
  <li>Employee Code</li>
  <li>Department</li>
</ul>

<p><strong>Shift Fields:</strong></p>
<ul>
  <li>Date</li>
  <li>Start Time</li>
  <li>End Time</li>
</ul>

<hr/>

<h2>❗ Business Rules</h2>
<ol>
  <li><strong>No Overlapping Shifts:</strong> An employee cannot have overlapping shifts on the same date.</li>
  <li><strong>Minimum Duration:</strong> Each shift must be at least 4 hours.</li>
  <li><strong>Role-Based Access:</strong>
    <ul>
      <li>Users → Only their own shifts</li>
      <li>Admins → Manage all shifts</li>
    </ul>
  </li>
</ol>

<hr/>

<h2>🖥 Backend</h2>

<h3>Tech Stack</h3>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB (Mongoose)</li>
  <li>JWT Authentication</li>
</ul>

<h3>API Endpoints</h3>

<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
    <th>Access</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>/login</td>
    <td>Authenticate user</td>
    <td>Public</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/employees</td>
    <td>Fetch all employees</td>
    <td>Admin</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/shifts</td>
    <td>Create shift</td>
    <td>Admin</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/shifts</td>
    <td>Fetch shifts</td>
    <td>Admin/User</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/shift/:id</td>
    <td>Delete shift</td>
    <td>Admin</td>
  </tr>
</table>

<h3>Architecture</h3>

<pre>
backend/
 ├── controllers/
 ├── services/
 ├── routes/
 ├── models/
 ├── middleware/
 ├── validations/
 └── utils/
</pre>

<hr/>

<h2>💻 Frontend</h2>

<h3>Tech Stack</h3>
<ul>
  <li>React (Vite)</li>
  <li>Axios</li>
  <li>React Router</li>
</ul>

<h3>Pages</h3>
<ul>
  <li>Login Page</li>
  <li>Dashboard</li>
  <li>Shift Assignment Form (Admin)</li>
  <li>Shifts Table View</li>
</ul>

<hr/>

<h2>🔑 Demo Credentials</h2>

<pre>
Email: hire-me@anshumat.org
Password: HireMe@2025!
</pre>

<hr/>

<h2>⚙️ Setup Instructions</h2>

<h3>Backend</h3>
<pre>
cd backend
npm install
npm run dev
</pre>

<p>Create a <code>.env</code> file:</p>

<pre>
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
</pre>

<h3>Frontend</h3>
<pre>
cd frontend
npm install
npm run dev
</pre>

<hr/>

<h2>🧪 Evaluation Focus</h2>
<ul>
  <li>Business rule enforcement</li>
  <li>Clean and maintainable code</li>
  <li>Edge case handling</li>
  <li>API validation</li>
</ul>

<hr/>

<h2>⚠️ Limitations</h2>
<ul>
  <li>No user self-registration</li>
  <li>Shifts are limited to a single day</li>
  <li>UI is minimal (focus on logic)</li>
</ul>

<hr/>

<h2>🏁 Submission</h2>

<pre>
Name:
GitHub Repo:
Live Demo:
Tech Stack:
Notes:
</pre>

<p>✅ <strong>This project strictly follows all assignment rules and requirements.</strong></p>
