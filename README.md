<h1 align="center">
  <br>
  <img src=".\img\discorbot_logo.svg" alt="Nutriabot" width="150">
  <br>
  <strong>Nutriabot</strong>
  <br>
</h1>

<h4 align="center"><strong>Bot de Discord para servers orientados a la impresión 3D.</strong></h4>

<p align="center">
  <a href="##funciones-principales">Funciones principales</a> •
  <a href="#stack">Stack</a> •
  <a href="#instalación">Instalación</a> •
  <a href="#uso-y-customización">Uso y customización</a> •
  <a href="#redes">Redes</a>
</p>

<p align="center">
  <br>
    <img src="./img/ejemplo_nozzle.gif" alt="ayuda">
  <br>
</p>



## Funciones principales

- Mensaje de ayuda (--ayuda)
- Explicaciones sobre diversos conceptos relacionados a la impresión 3D
  - Nozzles
  - Cambio de filamento
  - Extrusor
  - Firmware
  - Hotend
  - Tipos de impresoras
  - Libros de impresión 3D
- Funciones de moderación
  - Contador de usuarios
  - Eliminación masiva de mensajes
  - Recarga de comandos

### Ejemplos

<p align="center">
    <img src="./img/ejemplo_nozzle.gif" alt="ayuda" width="500" height="150">
  <br>
  <img src="./img/ejemplo_ayuda.png" alt="ayuda" width="500" height="150"></a>
  <br>
  <img src="./img/ejemplo_prune.gif" alt="prune"  width="500" height="150"></a>
  <br>
</p>

## Stack

- [DiscordJS](https://discord.js.org/)
- NodeJS
- Javascript

## Instalación

1. Clonar repositorio

    ```
    git clone git@github.com:lihuelworks/nutriabot.gite
    ```

2. Instalar dependencias
   1. [NodeJS](https://nodejs.org/en/download/)
   2. [DiscordJS](https://github.com/discordjs/discord.js) (en raiz de proyecto):

        ```c
        npm install discord.js
        ```
3. Armar una app en Discord, yendo [a Discord Developers](https://discord.com/developers/applications):

    <img src="./img/instalacion_creacion1.png" alt="ayuda" width="500">

4. Copiar el "secreto" (token) para habilitarla:

    <img src="./img/instalacion_creacion2.png" alt="ayuda" width="500">
    <br>
5. Crear archivo config.json en raíz de proyecto. Éste va a tener el **prefijo de tu bot** (en éste caso, "--"), y el **token recién copiado**:

    ```
    {
	  "prefix": "--",
	  "token": "PEGAR ACA TOKEN COPIADO"
    }
    ```
    - NOTA: Pegar el token en cualquier repositorio/red social/plataforma pública resultará en el token **siendo re-instanciado**, invalidando el token anterior. Discord enviará un mensaje a su cuenta si ésto sucede.
6. Una vez hecho ésto, se puede iniciar el bot usando:

    ```
    npm start
    ```

## Uso y customización

La idea del bot es que los comandos e información presentada en ellos pueda ser personalizada y escalada a conveniencia del usuario. Para ello, se utiliza un "handler" dinámico.

En terminos prácticos, ésto significa que cualquier archivo JS dentro de `./commands` que posea un `module.exports` sea tomado como comando, usando `execute(message, args) { ... }` como función de ejecución.

El comando puede tener distintas keys/campos, que añaden funcionalidad al mismo:
* **Aliases:** Permiten llamar al comando por otro nombre que no sea el del mismo archivo, usando un campo (`aliases:`) con un array de strings (Con cada alias siendo un string). Ejemplo, dentro de `avatar.js`
    ```
    module.exports = {
      name: 'avatar',
      description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
      aliases: ['icon', 'pfp'],
      ...
    }
    ```

* **Argumentos requeridos:** Permiten una forma general de chequear la necesidad de argumentos para el funcionamiento de un comando (en vez de necesitar un `if` por cada chequeo). Basta con añadir el campo `args` usando un valor booleano de `true` si se requieren argumentos, o `false` si no (aunque en ese caso se puede omitir el campo sin ninguna otra consecuencia). otro nombre que no sea el del mismo archivo, usando un array de strings (Con cada alias siendo un string). Ejemplo:
    ```
    module.exports = {
      name: 'args-info',
      description: 'Comando de test que necesita argumentos.',
      args: true,
      ...
    }
    ```
* **Uso esperado del comando:** Permite corregir al usuario, en caso de un misuso de un comando, con el uso esperado del mismo. Funciona en conjunto, por ejemplo, con **"Argumentos requeridos"**. El campo es un string de texto donde el usuario puede añadir una explicación del comando. Ejemplo (continuando del código anterior):
    ```
    module.exports = {
      name: 'args-info',
      description: 'Comando de test que necesita argumentos.',
      args: true,
      usage: '<user> <role>',
      ...
    }
    ```
* **Uso único en el server (GuildOnly):** Cualquier usuario que pertenezca a un server donde el bot esté implementado, puede también usar el mismo en mensajes privador (o DMs). Para evitar ésto, se puede añadir el campo `guildOnly` con un booleano `true`:
    ```
    module.exports = {
      name: 'kick',
      description: 'Kick a user from the server.',
      guildOnly: true,
      ...
    }
    ```
* **Cooldowns:** Permite evitar el spam de comandos, usando `cooldown` con el número de segundos que debe existir entre cada llamada del comando de un usuario individual (no llamadas en general de un canal de texto). Si ningún campo es aclarado, se usará un default de 3 segundos.
  ```
    module.exports = {
      name: 'ping',
      cooldown: 5,
      ...
    }
    ```
* **Permisos:** Algunos comandos tienen demasiado impacto sobre los mensajes de un canal como para ser usados por el común de los usuarios. Para ello, es posible agregar el campo `permissions` junto con una flag (o bandera) que defina que permisos necesita el usuario para usar el comando. Ejemplo con `prune.js`
  ```
    module.exports = {
      name: 'prune',
      description: 'Bulk deletes n number of messages per number in argument',
      permissions: 'MANAGE_CHANNELS',
      ...
    ```
    - NOTA: Puede ver una lista todas las flags usadas en DiscordJS [aquí](https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS).
* **Recarga de comandos:** En caso de hacer modificaciones sobre algún comando específico bajo `./commands`, es posible recargarlo sin necesidad de reiniciar el servidor donde está alojado el bot. Para ello, basta con usar `--reload` junto con el nombre del comando. Ejemplo:
    ```
    ---reload prune
    ```
Para más información, puede consultar a la [documentación de DiscordJS](https://discord.js.org/#/docs/main/stable/general/welcome) o [la guía creada alrededor de la misma](https://discordjs.guide/).

# Redes
- [👥 LinkedIn](https://www.linkedin.com/in/mathiasgomez/)
- [📷 Instagram (Portfolio de proyectos)](https://www.instagram.com/lihuelworks/)
- [☕ Cafecito](https://cafecito.app/lihuelworks)
