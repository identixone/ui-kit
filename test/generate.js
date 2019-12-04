import {
  build,
  fake,
  sequence,
  oneOf,
  arrayOf,
  bool,
  numberBetween,
  incrementingId,
} from "test-data-bot";
import { uniq } from "lodash-es";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomName() {
  return sequence(x => fake(f => f.hacker.verb() + `_${x}`));
}

const licenseTypes = ["basic", "standard", "standard+", "advanced"];
const confs = ["new", "reinit", "exact", "ha", "junk", "nm", "det"];

const sourceBuilder = build("Source")
  .fields({
    id: incrementingId(),
    license_type: oneOf(...licenseTypes),
    pps_timestamp: bool(),
    store_images_for_confs: arrayOf(
      oneOf(...confs),
      getRandomInt(0, confs.length)
    ),
    name: getRandomName(),
    identify_facesize_threshold: numberBetween(0, 12000),
    auto_create_persons: bool(),
    auto_create_facesize_threshold: numberBetween(0, 25000),
    auto_create_on_ha: bool(),
    auto_create_on_junk: bool(),
    auto_check_face_angle: bool(),
    auto_check_asm: bool(),
    auto_create_check_blur: bool(),
    auto_create_check_exp: bool(),
    auto_check_liveness: bool(),
    auto_create_liveness_only: bool(),
    manual_create_facesize_threshold: numberBetween(0, 25000),
    manual_create_on_ha: bool(),
    manual_create_on_junk: bool(),
    manual_check_asm: bool(),
    manual_create_liveness_only: bool(),
    manual_check_liveness: bool(),
  })
  .map(source => ({
    ...source,
    store_images_for_confs: uniq(source.store_images_for_confs),
  }));

const sourceStatsBuilder = build("Source Stats").fields({
  id: incrementingId(),
  name: getRandomName(),
  total: numberBetween(0, 100),
  conf: {
    reinit: numberBetween(0, 100),
    exact: numberBetween(0, 100),
    ha: numberBetween(0, 100),
    junk: numberBetween(0, 100),
    nm: numberBetween(0, 100),
    det: numberBetween(0, 100),
    new: numberBetween(0, 100),
  },
  liveness: {
    failed: numberBetween(0, 100),
    passed: numberBetween(0, 100),
    undetermined: numberBetween(0, 100),
  },
});

const userBuilder = build("User").fields({
  username: fake(f => f.internet.userName()),
  password: fake(f => f.internet.password()),
});

function generateSources(count) {
  return [...new Array(count)].map(sourceBuilder);
}

function generateSourcesStats(count) {
  return [...new Array(count)].map(sourceStatsBuilder);
}

export { userBuilder, sourceBuilder, generateSources, generateSourcesStats };
