export default function makeChecksDb ({ makeDb }) {
    return Object.freeze({
        findByUserId,
        insert,
        findById,
        update,
        remove
    })
    async function findByUserId({ user }) {
        const db = await makeDb();
    
        const query = `
        SELECT * 
        FROM checks
        WHERE
        user_id = '${user}'
        `;
  
        const [results] = await db.query(query);
        await db.end();
  
        return results
      }

      async function findById({ id }) {
        console.log(id)
        const db = await makeDb();
    
        const query = `
        SELECT * 
        FROM checks
        WHERE
        id = '${id}'
        `;
  
        const [results] = await db.query(query);
        await db.end();
  
        return results
      }

      async function remove({ id }) {
        const db = await makeDb();
    
        const query = `
        DELETE 
        FROM checks
        WHERE
        id = '${id}'
        `;
  
        const [results] = await db.query(query);
        await db.end();
  
        return results
      }

      async function insert({ url, path, user, timeout, name, threshold, interval, webhook, port, protocol}) {
          const db = await makeDb();

          const query = `
          INSERT INTO checks (
              url, 
              path, 
              timeout, 
              name, 
              threshold, 
              webhook,
              check_interval,
              protocol,
              user_id,
              port
              ) VALUES 
          (
              '${url}', 
              '${path}', 
              ${timeout}, 
              '${name}', 
              ${threshold}, 
              '${webhook}',
              ${interval},
              '${protocol}',
              ${user},
              ${port})`;

              console.log(query)

            const [results] = await db.query(query);
            await db.end();
  
            return results 
        }

        async function update({ email, name, password, modifiedOn, verified, createdAt, secretToken}) {
            const db = await makeDb();
  
            const query = `
            INSERT INTO checks (
                url, 
                path, 
                timeout, 
                created_at, 
                verified, 
                modified_on,
                secret_token
                ) VALUES 
            (
                '${name}', 
                '${email}', 
                '${password}', 
                ${createdAt}, 
                ${verified}, 
                ${modifiedOn},
                '${secretToken}')`;
  
              const [results] = await db.query(query);
              await db.end();
    
              return results 
        }
  }