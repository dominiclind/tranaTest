import SocialAuth from 'react-native-social-auth';
import Firestack from 'react-native-firestack';


const configurationOptions = {
  debug: true
};

// place reactions and autoruns here.
const firestack = new Firestack(configurationOptions);
// firestack.auth.listenForAuth((evt) => {
//   // evt is the authentication event
//   if (!evt.authenticated) {
//     // There was an error or there is no user
//   } else {
//     // evt.user contains the user details
//   }
//   console.log(evt);
// });

export const login = () => {
	SocialAuth.getFacebookCredentials(["email", "user_friends"], SocialAuth.facebookPermissionsType.read)
	.then((credentials) => {
		const token = credentials.accessToken;
  	firestack.auth.signInWithProvider('facebook', token, '')
    .then((user)=>{
      console.log(user);
    })
	})	
	.catch((error) => console.log(error))
}

export const checkLogin = (cb) => {
  console.log('check login');
  firestack.auth.listenForAuth((evt) => {
    // evt is the authentication event
    console.log('ey');
    if (!evt.authenticated) {
      // There was an error or there is no user
    } else {
      // evt.user contains the user details

      this.user = evt.user;
    }
    cb(evt);
  });
}

export const track = (item, cb) => {
  const trackItem = {
    ...item,
    createdAt: new Date().getTime(),
    user: {
      displayName: user.displayName,
      avatar: user.photoURL,
      uid: user.uid
    }
  };

  firestack.database.ref('items').push(trackItem).then(cb()).catch((error) => {
    // console.log(error);
  });
}



export const getItems = (cb) => {
  firestack.database
    .ref('items')
    .on('value', snapshot => {
      if(snapshot.value){
        const keys = Object.keys(snapshot.value);
        const arr = keys.map((key) => {
          return {
            ...snapshot.value[key],
            id: key
          }
        });
        cb(arr.sort(function(a, b) {
            a = new Date(a.createdAt);
            b = new Date(b.createdAt);
            return a>b ? -1 : a<b ? 1 : 0;
        }));
      } else {
        cb([]);
      }
    }) 
}
