// Fonction pour afficher ou masquer le terminal
function openTerminal() {
  const terminalRoot = document.getElementById('root');
  if (terminalRoot.style.display === 'none' || terminalRoot.style.display === '') {
    terminalRoot.style.display = 'flex'; // Afficher le terminal
    ReactDOM.render(<App />, terminalRoot); // Rendre le composant React App quand on ouvre le terminal
  } else {
    terminalRoot.style.display = 'none'; // Masquer le terminal
  }
}

function openPopup(folderName) {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.textContent = `Le dossier ${folderName} est protégé. Veuillez l'ouvrir dans le terminal en utilisant root@root.`;
  popup.style.display = 'block';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

function openImportantFilePopup() {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.innerHTML = `Je dois analyser cette IP, il y a une information importante à récupérer, IP : 172.85.25.156.<br>
Pour cela je dois me connecter a un reseaux WIFI, tout d'abord en utilisant la commande <span class="popup-content">airmon-ng --start wlan0</span><br> pour mettre ma carte wifi en mode monitor.<br>
ensuite je dois scanner les reseaux wifi a proximité avec la commande <span class="popup-content">airodump-ng wlan0mon</span><br>, puis je dois me connecter a un reseaux wifi avec la commande <span class="popup-content">aireplay-ng --deauth 0 -a [BSSID] wlan0mon</span><br> pour deauthentifier un client et recuperer le handshake.<br>
Enfin je dois lancer une attaque par dictionnaire avec la commande <span class="popup-content">aircrack-ng -w file.cap</span><br> pour recuperer la clé WPA du reseaux wifi.<br> Tu ne peut pas copier ce texte alors note les informations importantes sur un bloc note. Bonne chance !`;
  popup.style.display = 'block';
}

function showFile() {
  const file = document.getElementById('file');
  file.style.display = 'block';
}

function openFilePopup() {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.innerHTML = `Maintenant utilise la commande <span class="popup-content">nmap 172.85.25.156</span> pour scanner l\'IP. <br>
  Puis utilise la commande <span class="popup-content">run [fichier.cl] [ip]</span> pour te connecter<br>
  Voici les differents fichiers.cl choisie le bon en fonction du port ouvert<br>
  fichier 1: http20.cl<br>
  fichier 2: ftp21.cl<br>
  fichier 3: ssh22.cl<br>
  fichier 4: ftp20.cl<br>`;
  popup.style.display = 'block';
}

function openSuccessPopup() {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.innerHTML = `Bien joué! Tu as réussi à te connecter au réseau. <br> Maintenant à toi de trouver le fichier qui nous intéresse. <br> Pour cela utilise les commandes <span class="popup-content">ls, open et cat</span><br> Bonne chance!`;
  popup.style.display = 'block';
}

function openShoppingListPopup() {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.innerHTML = 'Liste de courses:<br>- Lait<br>- Pain<br>- Fromage<br>- Pommes';
  popup.style.display = 'block';
}

function openSchoolApplicationPopup() {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.innerHTML = 'Demande d\'inscription à l\'école EFREI Paris:<br>- Nom: John Doe<br>- Date de naissance: 01/01/2000<br>- Adresse: 123 Rue de Paris, 75000 Paris';
  popup.style.display = 'block';
}

function openTravelPlansPopup() {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.innerHTML = 'Liste de beaux voyages à faire:<br>- Japon<br>- Nouvelle-Zélande<br>- Canada<br>- Islande';
  popup.style.display = 'block';
}

function openConnectionInfoPopup() {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.innerHTML = 'CONNEXION AU SITE coche.rf.gd :<br>user = super@user<br>password = superpassword';
  popup.style.display = 'block';
}

function openPerson1Popup() {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.innerHTML = 'Personne 1:<br>- Nom: Alice<br>- Âge: 30 ans<br>- Profession: Ingénieur';
  popup.style.display = 'block';
}

function openPerson2Popup() {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.innerHTML = 'Personne 2:<br>- Nom: Bob<br>- Âge: 25 ans<br>- Profession: Designer';
  popup.style.display = 'block';
}

function openPerson3Popup() {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.innerHTML = 'Personne 3:<br>- Nom: Charlie<br>- Âge: 35 ans<br>- Profession: Développeur';
  popup.style.display = 'block';
}

// Composant principal React
const App = () => {
  const [theme, setTheme] = React.useState('dark');
  const themeVars = theme === 'dark' ? {
    app: {backgroundColor: '#333444'},
    terminal: {boxShadow: '0 2px 5px #111'},
    window: {backgroundColor: '#222345', color: '#F4F4F4', userSelect: "none"},
    field: {backgroundColor: '#222333', color: '#F4F4F4', fontWeight: 'normal'},
    cursor: {animation : '1.02s blink-dark step-end infinite'}
  } : {
    app: {backgroundColor: '#ACA9BB'},
    terminal: {boxShadow: '0 2px 5px #33333375'},
    window: {backgroundColor: '#5F5C6D', color: '#E3E3E3'},
    field: {backgroundColor: '#E3E3E3', color: '#474554', fontWeight: 'bold'},
    cursor: {animation : '1.02s blink-light step-end infinite'}
  };
  
  return <div id="app" style={themeVars.app}>
    <Terminal theme={themeVars} setTheme={setTheme}/>
  </div>;
};

// Composant du Terminal
const Terminal = ({ theme, setTheme }) => {
  const [maximized, setMaximized] = React.useState(false);
  const [title, setTitle] = React.useState('React Terminal');
  const handleClose = () => document.getElementById('root').style.display = 'none';
  
  return <div id="terminal" style={maximized ? {height: '100vh', width: '100vw', maxWidth: '100vw'} : theme.terminal}>
    <div id="window" style={theme.window}>
      <button className="btn red" onClick={handleClose}/>
      <button id="useless-btn" className="btn yellow"/>
      <button className="btn green"/>
      <span id="title" style={{color: theme.window.color}}>{title}</span>
    </div>
    <Field theme={theme} setTheme={setTheme} setTitle={setTitle}/>
  </div>;
};

// Composant Field (gère les commandes et l'entrée)
class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commandHistory: [],
      fieldHistory: [{text: 'React Terminal'}, {text: 'Clique sur le terminal et -> Type HELP to see the full list of commands.', hasBuffer: true}],
      userInput: '',
      monitorMode: false,
      wifiFound: false,
      handshake: false,
      connected: false,
      currentMachine: 'root',
      newMachineFiles: {
        '1. Documents': ['115. shopping_list.txt', '116. school_application.txt', '117. travel_plans.txt'],
        '2. Downloads': ['118. connection_info.txt'],
        '3. Famille': ['119. personne1.txt', '120. personne2.txt', '121. personne3.txt'],
        '4. Music': [],
        '5. Videos': []
      }
    };
  }

  // Méthode pour gérer l'entrée de l'utilisateur
  handleTyping = (e) => {
    e.preventDefault();
    const { key } = e;

    if (key === 'Enter') {
      const { userInput } = this.state;
      this.executeCommand(userInput.trim());
      this.setState({ userInput: '' });
    } else if (key === 'Backspace') {
      this.setState(state => ({userInput: state.userInput.slice(0, -1)}));
    } else if (key.length === 1) {
      this.setState(state => ({userInput: state.userInput += key}));
    }
  };

  // Méthode pour exécuter les commandes
  executeCommand = (input) => {
    const { fieldHistory, connected, newMachineFiles } = this.state;
    let output;
    let outputClass = ''; // Classe CSS pour la couleur du texte

    // Liste des commandes
    switch (input.toLowerCase()) {
      case 'help':
      case '-h':
        output = [
          'Main commands:',
          'HELP...........: Type HELP to see the full list of commands.',
          'CLEAR..........: Type CLEAR to clear the terminal.',
          'EXIT...........: Type EXIT to close the terminal.',
          '',
          'All commands:',
          'LS.............: Type LS to list all folders.',
          'OPEN...........: Type OPEN [number] to open the folder.',
          'CAT............: Type CAT [number] to open the file in the folder.',
          'RETURN.........: Type RETURN to go back to the main folder.',
        ];
        outputClass = 'text-default';
        break;
      case 'clear':
        this.setState({ fieldHistory: [] });
        return;
      case 'exit':
        document.getElementById('root').style.display = 'none';
        return;
      case 'ls':
        if (connected) {
          output = Object.keys(newMachineFiles);
        } else {
          output = ['Folder list:',
            '1. Important',
            '2. Information',
          ];
        }
        outputClass = 'text-blue'; // Affiche en bleu pour les dossiers
        break;
      case 'open 1':
        if (connected) {
          output = newMachineFiles['1. Documents'];
        } else {
          output = ['Folder list:',
            '17. important.txt'
          ];
        }
        outputClass = 'text-green';
        break;
      case 'open 2':
        if (connected) {
          output = newMachineFiles['2. Downloads'];
        } else {
          output = ['Folder list:',
            '1. mael.txt',
            '2. thomas.txt',
            '3. sarah.txt',
            '4. julien.txt'
          ];
        }
        outputClass = 'text-green';
        break;
      case 'open 3':
        if (connected) {
          output = newMachineFiles['3. Pictures'];
        } else {
          output = 'Command not recognized: ' + input;
          outputClass = 'text-red';
        }
        break;
      case 'open 4':
        if (connected) {
          output = newMachineFiles['4. Music'];
        } else {
          output = 'Command not recognized: ' + input;
          outputClass = 'text-red';
        }
        break;
      case 'open 5':
        if (connected) {
          output = newMachineFiles['5. Videos'];
        } else {
          output = 'Command not recognized: ' + input;
          outputClass = 'text-red';
        }
        break;
      case 'cat 1':
        if (connected) {
          openFilePopup('Liste de courses:<br>- Lait<br>- Pain<br>- Fromage<br>- Pommes');
          output = 'Opening shopping_list.txt...';
        } else {
          window.open('https://mael-dev-card.netlify.app/', '_blank');
          output = 'Opening mael.txt...';
        }
        outputClass = 'text-green'; // Affiche en vert pour les fichiers
        break;
      case 'cat 2':
        if (connected) {
          openFilePopup('Demande d\'inscription à l\'école EFREI Paris:<br>- Nom: John Doe<br>- Date de naissance: 01/01/2000<br>- Adresse: 123 Rue de Paris, 75000 Paris');
          output = 'Opening school_application.txt...';
        } else {
          window.open('https://github.com/DevThomas0', '_blank');
          output = 'Displaying content of thomas.txt...';
        }
        outputClass = 'text-green';
        break;
      case 'cat 3':
        if (connected) {
          openFilePopup('Liste de beaux voyages à faire:<br>- Japon<br>- Nouvelle-Zélande<br>- Canada<br>- Islande');
          output = 'Opening travel_plans.txt...';
        } else {
          window.open('https://github.com/starlague', '_blank');
          output = 'Displaying content of sarah.txt...';
        }
        outputClass = 'text-green';
        break;
      case 'cat 4':
        if (connected) {
          openFilePopup('Connection sur le site coche:<br>user = super<br>password = superpassword');
          output = 'Opening connection_info.txt...';
        } else {
          window.open('https://github.com/Number6272', '_blank');
          output = 'Displaying content of julien.txt...';
        }
        outputClass = 'text-green';
        break;
      case 'cat 17':
        openImportantFilePopup();
        output = 'Opening important.txt...';
        outputClass = 'text-green';
        break;
      case 'cat 115':
        if (connected) {
          openShoppingListPopup();
          output = 'Opening shopping_list.txt...';
        } else {
          output = 'Command not recognized: ' + input;
          outputClass = 'text-red';
        }
        break;
      case 'cat 116':
        if (connected) {
          openSchoolApplicationPopup();
          output = 'Opening school_application.txt...';
        } else {
          output = 'Command not recognized: ' + input;
          outputClass = 'text-red';
        }
        break;
      case 'cat 117':
        if (connected) {
          openTravelPlansPopup();
          output = 'Opening travel_plans.txt...';
        } else {
          output = 'Command not recognized: ' + input;
          outputClass = 'text-red';
        }
        break;
      case 'cat 118':
        if (connected) {
          openConnectionInfoPopup();
          output = 'Opening connection_info.txt...';
        } else {
          output = 'Command not recognized: ' + input;
          outputClass = 'text-red';
        }
        break;
      case 'cat 119':
        if (connected) {
          openPerson1Popup();
          output = 'Opening personne1.txt...';
        } else {
          output = 'Command not recognized: ' + input;
          outputClass = 'text-red';
        }
        break;
      case 'cat 120':
        if (connected) {
          openPerson2Popup();
          output = 'Opening personne2.txt...';
        } else {
          output = 'Command not recognized: ' + input;
          outputClass = 'text-red';
        }
        break;
      case 'cat 121':
        if (connected) {
          openPerson3Popup();
          output = 'Opening personne3.txt...';
        } else {
          output = 'Command not recognized: ' + input;
          outputClass = 'text-red';
        }
        break;
      case 'return':
        output = 'Returning to main folder...';
        outputClass = 'text-default';
        break;
      case 'airmon-ng --start wlan0':
        output = 'start wlan0 : Ok';
        outputClass = 'text-blue';
        this.setState({ monitorMode: true });
        break;
      case 'airodump-ng wlan0mon':
        if (!this.state.monitorMode) {
          output = 'Erreur : La carte n\'est pas en mode monitor.';
          outputClass = 'text-red';
        } else {
          output = '1 réseau wifi trouvé : bssid = 152516';
          outputClass = 'text-blue';
          this.setState({ wifiFound: true });
        }
        break;
      case 'aireplay-ng --deauth 0 -a 152516 wlan0mon':
        if (!this.state.wifiFound) {
          output = 'Erreur : Aucun réseau wifi trouvé.';
          outputClass = 'text-red';
        } else {
          output = 'Handshake récupéré dans file.cap';
          outputClass = 'text-blue';
          this.setState({ handshake: true });
        }
        break;
      case 'aircrack-ng -w file.cap':
        if (!this.state.handshake) {
          output = 'Erreur : Handshake non récupéré.';
          outputClass = 'text-red';
        } else {
          output = 'Vous êtes bien connecté. Vous pouvez maintenant ouvrir le fichier qui vient de s\'afficher.';
          outputClass = 'text-blue';
          showFile();
        }
        break;
      case 'nmap 172.85.25.156':
        if (!this.state.handshake) {
          output = 'Erreur : Vous devez d\'abord vous connecter au réseau.';
          outputClass = 'text-red';
        } else {
          output = [
            'Starting Nmap 7.91 ( https://nmap.org ) at XXXX-xx-xx XX:xx CEST',
            'Nmap scan report for 172.85.25.156 Host is up (0.00012s latency).',
            'Not shown: 999 closed ports',
            'PORT   STATE SERVICE',
            'Ports ouverts sur la machine 1 : tcp/20  FTP',
          ];
          outputClass = 'text-orange';
        }
        break;
      case 'run ftp20.cl 172.85.25.156':
        if (!connected) {
          output = 'Connected';
          outputClass = 'text-green';
          this.setState({ connected: true });
          openSuccessPopup();
        } else {
          output = 'Already connected.';
          outputClass = 'text-green';
        }
        break;
      default:
        output = `Command not recognized: ${input}`;
        outputClass = 'text-red'; // Affiche en rouge pour les erreurs
    }

    this.setState({
      fieldHistory: [
        ...fieldHistory,
        { text: `${connected ? '172.85.25.156>' : 'root@root:~$'} ${input}`, isCommand: true },
        { text: Array.isArray(output) ? output : [output], className: outputClass, hasBuffer: true }
      ]
    });
  };

  render() {
    const { theme } = this.props;
    const { fieldHistory, userInput, connected } = this.state;

    return <div
      id="field"
      className={theme.app.backgroundColor === '#333444' ? 'dark' : 'light'}
      style={theme.field}
      onKeyDown={this.handleTyping}
      tabIndex={0}
    >
      {fieldHistory.map(({ text, isCommand, className, hasBuffer }, i) => (
        Array.isArray(text) ? (
          text.map((line, index) => <div key={`${i}-${index}`} className={className}><span>{line}</span></div>)
        ) : (
          <div key={i} className={className}>
            {isCommand && <div id="query">{connected ? '172.85.25.156>' : 'root@root:~$'}</div>}
            <span>{text}</span>
            {hasBuffer && <div></div>}
          </div>
        )
      ))}
      <div id="query">{connected ? '172.85.25.156>' : 'root@root:~$'}</div>
      <span>{userInput}</span><span className="blinking-cursor">|</span>
    </div>;
  }
}
