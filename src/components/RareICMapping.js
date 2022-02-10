import spawnConfig from "../data/spawn-config.json";
import moment from "moment-timezone";
moment().tz("UTC").format();

const toTimeZone = (time, zone, format = "HH:mm") => {
  return moment(time, format).tz(zone.toString()).format(format);
};
/*
rares: List of npcs we want to map
settings: "region" and "tz" selected
*/
function RarareICMapping(rares, settings) {
  const tz = settings ? settings.tz : new Date().getTimezoneOffset().toString();
  const region = settings ? settings.region : "US";
  const now = moment().toDate();
  const configRSpwn = spawnConfig[region];
  const spawnInterval = spawnConfig.timer / 60;
  const reSpawnInterval = spawnInterval * spawnConfig.totalRares;

  rares = rares.map((rare) => {
    //calculate initial spawn
    const spawnDiff =
      (configRSpwn.registeredSpawn.id - rare.id) * spawnInterval;

    const rsDate = moment(configRSpwn.registeredSpawn.date)
      .add(spawnDiff, "minutes")
      .toDate();

    //Calculate next spawn
    let tfa = (now - rsDate) / (1000 * 60) / reSpawnInterval;
    let minutesNextSpawn = Math.ceil(reSpawnInterval * (Math.ceil(tfa) - tfa));
    const nextSpawn = moment(now).add(minutesNextSpawn, "minutes");

    let r = {
      ...rare,
      favorite: false,
      nextSpawn: toTimeZone(nextSpawn, tz),
      minutesNextSpawn: minutesNextSpawn,
    };
    return r;
  });
  rares.sort((a, b) => a.minutesNextSpawn - b.minutesNextSpawn);
  return rares;
}

export default RarareICMapping;
