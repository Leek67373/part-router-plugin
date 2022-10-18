class partRouterPlugin {
    constructor(public path:string = '@/router/routes$') {
    }
    apply(compiler: any) {
      const alias = (compiler.options && compiler.options.resolve && compiler.options.resolve.alias) || {};
      compiler.options.resolve.alias = {
        [this.path]: `${process.env.INIT_CWD}/index.js`,
        ...alias
      };
    }
  }
  
export default partRouterPlugin;
  