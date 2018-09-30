async function a() {
  const c = await b();
  return c.d;
}

async function thenFulfilledRejected() {
  try {
    const c = await b();
    return c.d;
  } catch (error) {
    console.error(error);
  }
}

async function thenDotCatch() {
  try {
    const c = await b();
    return c.d;
  } catch (error) {
    console.error(error);
  }
}

async function embedded() {
  await first();
  await second();
  return third();
}

async function promiseArrowShorthand() {
  const result = await asyncFunc();
  return { result };
}

const functionExpression = async function() {
  const result = await asyncFunc();
  return result * 2;
};

async function countUserVotes(userIds) {
  const users = await getUsers(userIds);
  return Promise.reduce(users, async (acc, user) => {
    const count = await user.getVoteCount();
    return acc + count;
  });
}

async function detructure(key) {
  const { [key]: result } = await asyncFunc();
  return result * 3;
}

const makeRequestFunction = async function() {
  const data = await getJSON();
  console.log(data);
  return "done";
};

const makeRequestArrowLong = async () => {
  const data = await getJSON();
  console.log(data);
  return "done";
};

const makeRequest = async () => {
  const data = await getJSON();
  console.log(data);
  return "done";
};

async function chainEventualThen() {
  const items = await Model.find().exec();
  return items.map(item => item.thing);
}

app.get("/with-return", async function(req, res) {
  try {
    const recipeResponse = await requestPromise(generateBeefFreeRecipeURL());
    const recipesList = JSON.parse(recipeResponse).results;
    const recipe = recipesList[0];
    const responseText = `<pre>${
      cowsay.say({
        text: recipe.title
      })
    }</pre>`;

    res.send(responseText);
  } catch (error) {
    console.log(error);
  }
});

app.get("/without-return", async function(req, res) {
  try {
    const recipeResponse = await requestPromise(generateBeefFreeRecipeURL());
    const recipesList = JSON.parse(recipeResponse).results;
    const recipe = recipesList[0];
    const responseText = `<pre>${
      cowsay.say({
        text: recipe.title
      })
    }</pre>`;

    res.send(responseText);
  } catch (error) {
    console.log(error);
  }
});

async function blurImageData(imageData, radius) {
  const { height, width } = imageData;

  // comment before return
  // within return expression
  await Promise.resolve(imageData.data.buffer.slice(0))
    // part of the resolve
    .then(bufferCopy => makeTransferable(bufferCopy))
    // chain
    .then(transferable => promiseBlur(transferable, width, height, radius))
    // more chaining comments
    .then(newBuffer => new Uint8ClampedArray(newBuffer))
    .then(pixels => imageData.data.set(pixels));

  return imageData;
}

async function arrayDestructuring() {
  const [, destructuredArrayElement] = await b();
  return destructuredArrayElement.d;
}

async function doesSomethingWithAPromise() {
  const promiseResult = await promise;
  doSomething(promiseResult);
}

async function returnsSomethingDone() {
  const promiseResult = await promise;
  return doSomething(promiseResult);
}

async function returnsSomethingDone(options) {
  const promiseResult = await promise;
  return options.doSomething(promiseResult);
}

async function returnsSomethingDone2(options) {
  const getPromiseResult = await getPromise(options);
  return options.doSomething(getPromiseResult);
}

async function returnsCallbackResult(options) {
  const getPromiseResult = await start().getPromise(options);
  return getCallback()(getPromiseResult);
}

async function returnsArrayCallbackResult(options) {
  const getPromiseResult = await start().getPromise[1](options)[2];
  return getCallback()(getPromiseResult);
}

async function returnsMultipleParams() {
  const [x, y] = await b();
  return x.foo + y.foo;
}
