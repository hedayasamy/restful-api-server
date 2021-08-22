export default function makeUsersDb ({ makeDb }) {
    return Object.freeze({
        findByEmail,
        insert,
        findByToken,
        verifyUser
    })
    async function findByEmail({ email }) {
        const db = await makeDb();
    
        const query = `
        SELECT * 
        FROM users
        WHERE
        email = '${email}'
        `;
  
        const [results] = await db.query(query);
        
        await db.end();
  
        return results
      }

      async function findByToken({ token }) {
        const db = await makeDb();
    
        const query = `
        SELECT * 
        FROM users
        WHERE
        secret_token = '${token}'
        `;
  
        const [results] = await db.query(query);
        await db.end();
  
        return results
      }

      async function insert({ email, name, password, modifiedOn, verified, createdAt, secretToken}) {
          const db = await makeDb();

          const query = `
          INSERT INTO users (
              name, 
              email, 
              password, 
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

        async function verifyUser({ id }) {
            const db = await makeDb();
        
            const query = `
            UPDATE 
            users
            SET
            secret_token = '',
            verified = 1
            WHERE 
            users.id = ${id}
            `;
      
            const [results] = await db.query(query);
            await db.end();
      
            return results
          }
    
  }