using System.Web.Optimization;

namespace WebApplication9.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundels(BundleCollection bundles)
        {
            BundleTable.EnableOptimizations = false;

            var appBundle = new ScriptBundle("~/bundles/app").Include(
                "~/app/app.js",
                "~/app/core/*js",
                "~/app/services/*.js",
                "~/app/directives/*.js",
                "~/app/controllers/*.js");

            //appBundle.Transforms.Add(new JsMinify());
            bundles.Add(appBundle);

            var angularBundle = new ScriptBundle("~/bundles/angular").Include(
                "~/scripts/angular.js",
                "~/scripts/*.js");

            //angularBundle.Transforms.Add(new JsMinify());
            bundles.Add(angularBundle);

            var styleBundle = new StyleBundle("~/bundels/styles").Include(
                "~/content/*.css");

            //styleBundle.Transforms.Add(new CssMinify());
            bundles.Add(styleBundle);
        }
    }
}