// ⚠️ npm install uuid
// npm i --save-dev @types/uuid

import { UUID } from 'crypto';
// import { v4 as uuidv4 } from 'uuid';


// const uuid = uuidv4();


interface User {
    id: UUID;
    nom_utilisateur: string;
    mot_de_passe: string;
    email: string;
  }
  
  export default User;
  