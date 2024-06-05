// We putt all the variables that should be constants and should be reused accros the project.
// Goal of having this file is that it will allow us to easily configure our project by simply changing some of the data thats here in the configuration file.
// The only variables that we do want here are the ones that are responsible for defining some important data about the application itself.

export const API_URL = `https://forkify-api.herokuapp.com/api/v2/recipes/`;

// we used uppercase, cause this is a constant that will never change. ıts a common practice.

export const TIMEOUT_SEC = 10;
export const RES_PER_PAGE = 10;
export const KEY = 'aa87241d-43e3-4fa7-8b19-4fa2103c4a05';
export const MODAL_CLOSE_SEC = 2.5;
