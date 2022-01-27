
// injected to vue prototype and nuxt context
// usage nuxt & vue     context.app.$numberWithCommas(2000)    - $numberWithCommas(2000)

import {allUser} from "@/constants/queries/user-repository"
import {db} from "@/db/init"

export default ({ app }, inject) => {
  inject('getAll', () => {
    db.serialize(() => {
      db.each(allUser, (err, rows) => {
        if (err) {
          console.error(err.message);
        }
        console.log(rows);
      });
    });
  })
}


export default ({ app }, inject) => {
  inject('get', () => {
    db.serialize(() => {
      db.each(allUser, (err, rows) => {
        if (err) {
          console.error(err.message);
        }
        console.log(rows);
      });
    });
  })
}



export default ({ app }, inject) => {
  inject('update', () => {
    db.serialize(() => {
      db.each(allUser, (err, rows) => {
        if (err) {
          console.error(err.message);
        }
        console.log(rows);
      });
    });
  })
}
