import SocialAuth from 'react-native-social-auth';
import Firestack from 'react-native-firestack';

const configurationOptions = {
  debug: true
};

// place reactions and autoruns here.
const firestack = new Firestack(configurationOptions);


firestack.auth.listenForAuth((evt) => {
  // evt is the authentication event
  if (!evt.authenticated) {
    // There was an error or there is no user
  } else {
    // evt.user contains the user details
    console.log(evt.user);
  }
})


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

export const checkLogin = () => {

}