import spawnConfig from "../data/spawn-config.json";
/*
rares: List of npcs we want to map
settings: "region" and "gmt" selected
*/
function detectRegion() {
  // var tz = -new Date().getTimezoneOffset() / 60;
  // var naTz = [13, 14, -11, -10, -9, -8, -7, -6, -5, -4];
  // var euTz = [-1, 0, 1, 2, 3, 4, 5];
  // return ((tz>-12 && tz <-3)||())? "US" : euTz.contains(tz) ? "US" : "";
}

function RarareICMapping(rares, settings) {
  var tz = -new Date().getTimezoneOffset() / 60;
  rares.map((rare) => {
    return rare;
    //calculate initial spawn for all
    // var configRSpwn = spawnConfig[settings.region];
    // var rspawn = spawnConfig[settings.region]
    //  var registeredSpawn= settings[region].registeredSpawn;
    //  var compareDate = new Date();

    // spawnregistered= moment(spawnregistered).add(-3,"hour").toDate();
    // compareDate= moment(compareDate).add(-3,"hour").toDate();
    //     var nextSpawn=
    //     //Calculate next spawn
    //   //Map macros
    //     var mapped={
    //       name,
    //       nextSpawn = "",
    //        etc = ""
    //     }
    //     return mapped;
  });

  return rares;
}

export default RarareICMapping;
