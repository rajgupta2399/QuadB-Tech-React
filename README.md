# React Todo Application with Redux Toolkit

A modern, responsive Todo application built with React, Redux Toolkit, and Tailwind CSS. This application demonstrates advanced state management, component composition, and responsive design principles.

## 🚀 Features

- **Task Management**

  - Add new tasks with descriptions
  - Delete existing tasks
  - Set task priorities (High, Medium, Low)
  - Persistent storage using localStorage

- **Advanced State Management**

  - Centralized state management with Redux Toolkit
  - Efficient state updates and modifications
  - Type-safe state management with TypeScript

- **Responsive Design**
  - Mobile-first approach
  - Seamless experience across devices
  - Flexible layouts using CSS Grid and Flexbox
  - Clean and intuitive user interface

## 🛠️ Technologies Used

- React 18
- Redux
- Redux Toolkit
- Javascript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/rajgupta2399/QuadB-Tech-React.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

### Adding Tasks

1. Enter task description in the input field
2. Select priority level (High, Medium, Low)
3. Press Enter or click the Add button

### Managing Tasks

- View all tasks in a responsive list format
- Delete tasks using the delete button
- Tasks are automatically sorted by priority
- All tasks persist across browser sessions

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

### State Management

The application uses Redux Toolkit for state management. The main slice (`todoSlice`) handles:

- Adding tasks
- Removing tasks
- Setting task priorities
- Loading/saving state from localStorage

## 📱 Responsive Design

The application follows a mobile-first approach with three main breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Layout adjustments are handled through Tailwind CSS classes, utilizing both Grid and Flexbox for optimal component arrangement.

## Hosted Link

<a href="https://quadbtechreact.netlify.app/">QuadB Tech</a>

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request.

<br />
  <li>Home Page</li>
  <img src="/public/assets/homedark.jpg" alt="" />

  <li>Edit Task</li>
  <img src="/public/assets/edittask.jpg" alt="" />

  <li>All Task</li>
  <img src="/public/assets/alltask.jpg" alt="" />

  <li>Today Task</li>
  <img src="/public/assets/oday.jpg" alt="" />

  <li>Light Theme</li>
  <img src="/public/assets/light.jpg" alt="" />
