specialForms = Object.create(null);
topEnv = Object.create(null);

/******Modulo: Science******/
specialForms["v+"] = function(args, env) {
  let mayor = 0;
  args = args.map((arg) => {
        return arg.evaluate(env);
  });
  args.forEach((v) => {
        if(!Array.isArray(v))
          throw new SyntaxError("Mal uso de v+, argumentos  deben ser tipos vector");
        else if (v.length > mayor) mayor = v.length;
  });
  let result = new Array(mayor);
  result.length = mayor;
  for (let i = 0 ; i < mayor ; i++){
    result[i] = 0;
  }
  args.forEach((vec) => {
    for (let i = 0 ; i < mayor ; i++ ){
        if(typeof vec[i] == "number")
          result[i] += vec[i];
        else break;
    }
  });
  return result;
}

specialForms["v-"] = function(args, env) {
  let mayor = 0;
  args = args.map((arg) => {
        return arg.evaluate(env);
  });
  args.forEach((v) => {
        if(!Array.isArray(v))
          throw new SyntaxError("Mal uso de v-, argumentos  deben ser tipos vector");
        else if (v.length > mayor) mayor = v.length;
  });
  let result = new Array();
  args[0].forEach((arg) => {
    result.push(arg);
  });
  while(result.length < mayor)
        result.push(0);

  args.shift();
  args.forEach((vec) => {
      for (let i = 0 ; i < mayor ; i++ ){
        if(typeof vec[i] == "number")
          result[i] -= vec[i];
        else break;
      }
  });
  return result;
}

specialForms["v*"] = function(args, env) {
  let mayor = 0;
  args = args.map((arg) => {
        return arg.evaluate(env);
  });
  args.forEach((v) => {
        if(!Array.isArray(v))
          throw new SyntaxError("Mal uso de v+, argumentos  deben ser tipos vector");
        else if (v.length > mayor) mayor = v.length;
  });
  let result = new Array(mayor);
  result.length = mayor;
  for (let i = 0 ; i < mayor ; i++){
    result[i] = 1;
  }
  args.forEach((vec) => {
    for (let i = 0 ; i < mayor ; i++ ){
        if(typeof vec[i] == "number")
          result[i] = result[i] * vec[i];
        else break;
    }
  });
  return result;
}

specialForms["v/"] = function(args, env) {
  let mayor = 0;
  args = args.map((arg) => {
        return arg.evaluate(env);
  });
  args.forEach((v) => {
        if(!Array.isArray(v))
          throw new SyntaxError("Mal uso de v-, argumentos  deben ser tipos vector");
        else if (v.length > mayor) mayor = v.length;
  });
  let result = new Array();
  args[0].forEach((arg) => {
    result.push(arg);
  });
  while(result.length < mayor)
        result.push(1);

  args.shift();
  args.forEach((vec) => {
      for (let i = 0 ; i < mayor ; i++ ){
        if(typeof vec[i] == "number")
          if(vec[i] != 0)
            result[i] /= vec[i];
          else throw new SyntaxError("Division por 0");
        else break;
      }
  });
  return result;
}

specialForms["pow"] = function(args, env) {
  if (args.length != 2)
    throw new Error("Bad use of pow need 2 args")
  args = args.map((arg) => {
        return arg.evaluate(env);
  });
  return Math.pow(args[0],args[1]);
}

specialForms["sqrt"] = function(args, env) {
  if (args.length == 1)
    throw new Error("Bad use of sqrt need 1 arg")
  args = args.map((arg) => {
        return arg.evaluate(env);
  });
  return Math.sqrt(args[0]);
}

/*******************************************/

module.exports = {specialForms, topEnv};
