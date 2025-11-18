IPA Management Tool
===================

Utility platform that helps Swiss apprentices plan and execute their Individuelle Praktische Arbeit (IPA). Trainees can organize tasks, track IPA criteria, prepare documentation/presentations, follow submission checklists, and keep an eye on their well-being throughout the project.

Repo Layout
-----------
- `frontend/` – React Router application (TypeScript + Tailwind) providing the dashboard, planner, notes, and checklist UI.
- `backend/` – ASP.NET Core solution with clean architecture layers (`Domain`, `Application`, `Infrastructure`, `Api`) for authentication, persistence, notifications, and multi-user logic.

Getting Started
---------------
1. **Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
2. **Backend**
   ```bash
   cd backend
   dotnet restore
   dotnet run --project IPA.ManagementTool.Api
   ```

Refer to the wiki for deeper documentation once it’s published (architecture, deployment, feature guides).
