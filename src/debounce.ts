type Func = (...args: unknown[]) => void;

export const debounce = (func: Func, wait: number): Func => {
  let timeout: number | null = null;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const logger = (str: string): void => console.log(str);

const fn = debounce(logger, 5000);

fn("hello");
fn("world");
