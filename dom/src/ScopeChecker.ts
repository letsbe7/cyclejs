import {ModuleIsolator} from './ModuleIsolator';

export class ScopeChecker {
  constructor(private scope: string,
              private isolateModule: ModuleIsolator) {
  }

  public isStrictlyInRootScope(leaf: Element): boolean {
    for (let el = leaf; el; el = el.parentElement) {
      const scope = this.isolateModule.isIsolatedElement(el);
      if (scope && scope !== this.scope) {
        return false;
      }
      if (scope) {
        return true;
      }
    }
    return true;
  }
}
