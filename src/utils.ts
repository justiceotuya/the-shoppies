//  export function debounce(func:Function, timeout:number) {
//     let ready: boolean = true;
//     return (...args:any) => {
//       if (!ready) {
//         return;
//       }

//       ready = false;
//       func(...args);
//       setTimeout(() => {
//         ready = true;
//       }, timeout);
//     };
//   }

export function debounce<Params extends any[]>(
    func: (...args: Params) => any,
    timeout: number,
  ): (...args: Params) => void {
    let timer: NodeJS.Timeout
    return (...args: Params) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func(...args)
      }, timeout)
    }
  }
