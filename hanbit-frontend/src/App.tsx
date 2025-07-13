import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChatPage from './pages/ChatPage'
import ChatsPage from './pages/ChatsPage'
import DiscoverPage from './pages/DiscoverPage'
import FriendsPage from './pages/FriendsPage'
import HelpPage from './pages/HelpPage'
import HomePage from "./pages/HomePage"
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import SignPage from './pages/SignPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/join" element={<SignPage />}/>
        <Route path="/chat/:chatId" element={<ChatPage />}/>
        <Route path="/chats" element={<ChatsPage />}/>
        <Route path="/discover" element={<DiscoverPage />}/>
        <Route path="/friends" element={<FriendsPage />}/>
        <Route path="/help" element={<HelpPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/settings" element={<SettingsPage />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
