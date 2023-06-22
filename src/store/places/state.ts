export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number]; //lon, lat
}

function state(): PlacesState {
  return {
    isLoading: true,
    userLocation: undefined
  }
}

export default state;