# SUPR Agency Terminal Model Application System

A modern, iOS 18-inspired terminal interface for model agency management built with React, TypeScript, and Supabase.

## Features

- **iOS 18 Interface Design**: Modern, sleek interface inspired by iOS 18
- **Multi-language Support**: English and Thai language support
- **Responsive Design**: Works on desktop and mobile devices
- **Supabase Integration**: Backend powered by Supabase
- **Terminal Interface**: Interactive terminal-style navigation
- **Authentication**: Secure user authentication system
- **Model Management**: Comprehensive model portfolio management

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase
- **Deployment**: Vercel
- **Internationalization**: react-i18next

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/superchair777/supragencyresume.git
cd supragencyresume
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── locales/            # Internationalization files
└── assets/             # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

The application is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
