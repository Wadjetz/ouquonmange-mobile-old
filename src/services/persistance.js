import Realm from "realm";
import { AuthSchema } from "../models/User";

export let realm = new Realm({
  schema: [
    AuthSchema
  ]
});

export function getJwtToken() {
  return new Promise(function(resolve) {
    const auth = realm.objects("Auth");
    if (auth.length > 0) {
      resolve(auth[0].jwt_token);
    } else {
      resolve(undefined);
    }
  });
}

export function deleteJwtToken(callback) {
  realm.write(() => {
    realm.delete(realm.objects("Auth"));
    callback();
  });
}
