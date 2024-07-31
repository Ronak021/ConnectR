
# ConnectR: Video Conferencing Website




## Overview

ConnectR is a video conferencing tool developed using Next.js and TypeScript. It features secure authentication via Clerk for social sign on and email/password methods. Provide realtime commincation using getstream service. Users can start, manage, and end meetings with configurable camera/mic settings, recording, screen
 sharing, and participant controls. The app supports scheduling, accessing past meetings, and viewing recordings. It includes a personal room with a unique link and real-time secure interactions. Responsive design ensures optimal experience across devices.
## Key Features


### 🔑 Authentication
- **Secure Login**: Users can log in using social sign-on (google) or traditional email and password methods.
- **Authorization**: Ensures appropriate access levels and permissions within the platform using Clerk.

### 📞 Meeting Management
- **New Meeting**: Start a new meeting with configurable camera and microphone settings.
- **Meeting Controls**: Manage meetings with features like recording, emoji reactions, screen sharing, muting/unmuting, and participant management.
- **Exit Meeting**: Participants can leave the meeting, or creators can end it for all attendees.

### 📅 Scheduling and History
- **Schedule Future Meetings**: Input details such as date and time to schedule meetings, accessible via a unique link.
- **Past Meetings List**: View details and metadata of previously held meetings.
- **View Recorded Meetings**: Access recordings of past meetings for review.

### 🌐 Personal Room
- **Unique Meeting Link**: Users have a personal room with a unique link for instant meetings.
- **Join via Link**: Easily join meetings created by others using a provided link.

### 🔒 Secure Real-time Functionality
- **Real-time Interactions**: All interactions are secure and occur in real-time, ensuring user privacy and data integrity.

### 📱 Responsive Design
- **Adaptive Layout**: The design adapts seamlessly to different screen sizes and resolutions, providing an optimal experience across devices.

    
## Technical Stack

- **Frontend**: [Next.js](https://nextjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Real-time Communication and Backend**: [getstream](https://getstream.io/)
- **UI Components**: [shadcn](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/Ronak021/ConnectR.git
    ```

2. **Navigate to the Project Directory**
    ```bash
    cd ConnectR
    ```

3. **Install Dependencies**
    ```bash
    npm install
    ```
4. **Set Environment Variables in .env File**:
Create a new file named `.env` in the root of your project and add the following content:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   NEXT_PUBLIC_STREAM_API_KEY=
   STREAM_SECRET_KEY=
   ```

5. **Run the Application**:
    ```bash
    npm run dev
    ```

## Acknowledgements

- **[Clerk](https://clerk.dev/)**
- **[getstream](https://getstream.io/)**
- **[shadcn](https://ui.shadcn.com/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Next.js](https://nextjs.org/)**
- **[TypeScript](https://www.typescriptlang.org/)**



