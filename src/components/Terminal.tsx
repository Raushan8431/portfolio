import React, { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { Terminal as TerminalIcon, Clock, Calendar, User, Folder, Minimize2, Maximize2 } from 'lucide-react';

interface Command {
  input: string;
  output: string | JSX.Element;
  timestamp: Date;
}

const Terminal: React.FC = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMinimized, setIsMinimized] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(scrollToBottom, [commands]);

  const handleCommand = (cmd: string) => {
    const normalizedCmd = cmd.toLowerCase().trim();
    let output: string | JSX.Element = 'Command not found. Type "help" for available commands.';

    switch (normalizedCmd) {
      case 'help':
        output = (
          <div className="space-y-2">
            <p>Available commands:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>help - Show this help message</li>
              <li>clear - Clear terminal</li>
              <li>time - Show current time</li>
              <li>date - Show current date</li>
              <li>about - Go to About section</li>
              <li>skills - Go to Skills section</li>
              <li>projects - Go to Projects section</li>
              <li>education - Go to Education section</li>
              <li>certifications - Go to Certifications section</li>
              <li>contact - Go to Contact section</li>
              <li>home - Go to Home section</li>
            </ul>
          </div>
        );
        break;
      case 'clear':
        setCommands([]);
        return;
      case 'time':
        output = `Current time: ${format(currentTime, 'HH:mm:ss')}`;
        break;
      case 'date':
        output = `Current date: ${format(currentTime, 'MMMM do, yyyy')}`;
        break;
      case 'about':
      case 'skills':
      case 'projects':
      case 'education':
      case 'certifications':
      case 'contact':
      case 'home':
        const element = document.getElementById(normalizedCmd);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          output = `Navigating to ${normalizedCmd.charAt(0).toUpperCase() + normalizedCmd.slice(1)} section...`;
        }
        break;
    }

    setCommands([...commands, { input: cmd, output, timestamp: new Date() }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim()) {
      handleCommand(currentInput);
      setCurrentInput('');
    }
  };

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 right-4 bg-background-dark border border-primary/30 rounded-lg p-3 shadow-lg hover:bg-background-light transition-colors duration-300 z-50"
      >
        <TerminalIcon className="w-5 h-5 text-primary" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 h-96 bg-background-dark border border-primary/30 rounded-lg shadow-lg overflow-hidden z-50">
      <div className="bg-background p-2 border-b border-primary/30 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TerminalIcon className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-mono">Terminal</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-xs text-neutral-400">
            <Clock className="w-3 h-3 mr-1" />
            {format(currentTime, 'HH:mm:ss')}
          </div>
          <div className="flex items-center text-xs text-neutral-400">
            <Calendar className="w-3 h-3 mr-1" />
            {format(currentTime, 'MMM dd')}
          </div>
          <button
            onClick={() => setIsMinimized(true)}
            className="text-neutral-400 hover:text-primary transition-colors duration-300"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div ref={terminalRef} className="h-[calc(100%-80px)] overflow-y-auto p-4 font-mono text-sm">
        {commands.map((cmd, i) => (
          <div key={i} className="mb-4">
            <div className="flex items-center text-neutral-400 mb-1">
              <User className="w-3 h-3 mr-1" />
              <span className="text-primary mr-1">user</span>
              <span className="mr-1">@</span>
              <span className="text-accent mr-1">system</span>
              <span className="mr-1">~</span>
              <Folder className="w-3 h-3 mr-1" />
              <span className="text-xs">{format(cmd.timestamp, 'HH:mm:ss')}</span>
            </div>
            <div className="text-neutral-300">$ {cmd.input}</div>
            <div className="text-neutral-400 mt-1">{cmd.output}</div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="border-t border-primary/30 p-2">
        <div className="flex items-center">
          <span className="text-primary mr-2">$</span>
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white font-mono"
            placeholder="Type 'help' for commands..."
            spellCheck="false"
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
};

export default Terminal;