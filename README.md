Homeroom

 Homeroom is a teacher-facing classroom and school management application designed to enable educators and administrators to keep track of important announcements, lesson plans, assignments, and student performance.

At the elementary/middle school where I was previously employed, teachers were directed to use a mixture of Google applications, primarily Google Sites, to keep track of their classrooms. This often caused more problems than it solved, as many teachers found the technology confusing, and were reluctant to dive into the more advanced features of the site.

Homeroom is purpose-built for educators, designed to be easy to use with an intuitive interface that welcomes even the staunchest luddite teacher.


In it's current form, after a week's work, Homeroom is essentially a message board CRUD app with education paint all over it. Still, it already hosts a number of features and technologies that are relatively advanced for a new programmer. The site is a MERN stack with Redux, with a front and back end split into different repos and deployed separately. Authentication is fully implemented, and Authorization is nearly complete, with restricted views depending on whether or not a user is an administrator.

Future versions will feature a calendar, and graphing capabilities (likely using D3) to track student performance over time. The site also needs to achieve full CRUD for all seven models in the database.

Most challenges faced in this project were due to my choice to build a react/redux application while still learning both technologies. While I went into this project with a good handle on the fundamentals of props/state management, as the project grew more advanced, my lack of experience became a more significant obstacle.

That said, I am pleased with my experience with React/Redux. It was a significantly larger investment of time to set up the bare-bones of the site, but as Homeroom grew in size and complexity, that structure began to pay off.
