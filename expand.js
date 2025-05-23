function expand(template, params) {
  function getKeysFromstring(str) {
    const keys = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i - 1] === '{') {
        const key = [];

        while(str[i] !== '}') {
          key.push(str[i++]);
        }

        keys.push(key.join(''));
      }
    }

    return keys;
  }

  const keys = getKeysFromstring(template);

  for (let key of keys) {
    let value;
    const path = key.split('.');

    if (path.length === 1) {
      value = params[path[0]];
    } else {
      path.forEach((path) => {
        value = value ? value[path] : params[path];
      });
    }
    

    if (value !== undefined) {
      template = template.replaceAll(`{${key}}`, value);
    }
  }

  return template;
}

console.log(expand('Hello, {user.name}! Now {time} {date}', { user: { name: 'Vasya' } , time: '14:30' }));

// expand('Hello, {user.name}! Now {time} {date}', { user: { name: 'Vasya', time: '14:30' }});
// Hello, Vasya! Now 14:30 {date}