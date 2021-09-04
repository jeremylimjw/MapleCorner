import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {
    private storedRoutes = new Map<string, DetachedRouteHandle>();
  
    /** If its the route(s) we want to cached. */
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return route.routeConfig!.path === 'timer';
    }
  
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        this.storedRoutes.set(route.routeConfig!.path!, handle);
    }
  
    /** If it exists inside our mapping. */
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!this.storedRoutes.get(route.routeConfig!.path!);
    }
  
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle|null  {
        return this.storedRoutes.get(route.routeConfig!.path!) as DetachedRouteHandle;
    }
    
    /** If user is navigating away. */
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }
}