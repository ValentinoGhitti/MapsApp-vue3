import { StateInterface } from "@/store";
import { useStore } from "vuex"

export const usePlacesStore = () => {
  const store = useStore<StateInterface>();

  return {

  }
}