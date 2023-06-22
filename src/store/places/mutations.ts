import { MutationTree } from 'vuex';
import { PlacesState } from './state';

const mutation: MutationTree<PlacesState> = {
  someMutation( state: PlacesState, coords) {
    state.userLocation = coords;
    state.isLoading = false;
  }
}


export default mutation;