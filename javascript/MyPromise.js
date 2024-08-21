class MyPromise {
  constructor(executionFn) {
    this.val = null;
    this.state = "pending";
    this.successCaller = [];
    this.failedCaller = [];

    this.resolve = (val) => {
      console.log("this.resolve value in constructor ", val);
      this.state = "fulfilled";
      this.val = val;
      this.successCaller.forEach((cb) => cb());
    };
    this.reject = () => {
      this.state = "reject";
      this.val = val;
      this.failedCaller.forEach((cb) => cb());
    };

    executionFn(
      (val) => {
        this.resolve(val);
      },
      (val) => {
        this.reject(val);
      }
    );
  }
  then(resolveCallBack, rejectCallback) {
    console.log("i am outside of if ", this.successCaller);
    return new Promise((res, rej) => {
      const onResolve = () => {
        try {
          if (!resolveCallBack) res(this.val);
          const value = resolveCallBack(this.val);
          res(value);
        } catch (error) {
          rej(error);
        }
      };

      const onReject = () => {
        try {
          if (!rejectCallback) rej(this.val);
          const value = rejectCallback(this.val);
          res(value);
        } catch (error) {
          rej(error);
        }
      };

      switch (this.state) {
        case "pending":
          this.successCaller.push(onResolve);
          this.failedCaller.push(onReject);
          break;
        case "fulfilled":
          onResolve();
          break;
        case "reject":
          onReject();
          break;
        default:
          throw new Error("state is not set properly");
      }
    });
  }
  catch(rejectCallback) {
    return this.then(null, rejectCallback);
  }
}
