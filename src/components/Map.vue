<template>
  <!-- {{ userLocation.lat }} {{ userLocation.long }} -->
  <div class="w-auto sm:w-4/5 sm:h-screen">
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="[23.113592, -82.366592]"
      @move="log('move')"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-control-layers />
   

    </l-map>
 
  </div>
</template>
<script>
// :center="[47.41322, -1.219482]"
import {
  LMap,
  LTileLayer,
  LMarker,
  LControlLayers,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { onMounted, ref, computed} from 'vue';
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlLayers,
  },
  setup() {
    const zoom = ref(7)
    const userLocation = ref({})

    const log = (a) =>  {
      console.log(a);
    }

    async function  getUserPosition() {
      // check if API is supported
      if (navigator.geolocation) {
        // get  geolocation
        navigator.geolocation.getCurrentPosition(pos => {
          // set user location
          userLocation.value = {
            lat: pos.coords.latitude,
            long: pos.coords.longitude
          };
        });
      }
    }

    onMounted( async () => {
      await getUserPosition()

      console.log(userLocation)
    })


    return {
        zoom,
        log,
        userLocation
        // lat,
        // long,
        // test
    }
  }
};
</script>