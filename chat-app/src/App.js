import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from './components/LoginForm';

const projectID = 'e1cc3994-b2de-4ee2-007956e6gf89fdgdfghg';
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
       <ChatEngine
       height='100vh'
       projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
  );
}

export default App;
