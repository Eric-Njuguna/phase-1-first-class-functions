function receivesAFunction(spy) {
    return spy();
}

function returnsANamedFunction() {
    let fn = () => console.log(`returns a named function`);
    return fn;
}

function returnsAnAnonymousFunction() {
    return () => "";
}
