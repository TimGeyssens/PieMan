﻿using System;
using System.Collections.Specialized;
using Skybrud.Social;
using Umbraco.Web.UI.Pages;

namespace PieMan.BackOffice
{

    public partial class OAuth : UmbracoEnsuredPage {

        protected void Page_Load(object sender, EventArgs e) {

            // The Analytics authentication site should redirect back to this URI
            string callback = Request.Url.AbsoluteUri.Replace("/OAuth.aspx", "/OAuthCallback.aspx");

            // Generate a random state
            string state = Guid.NewGuid().ToString();

            // Add the state to the session
            Session.Add("PieMan_" + state, "#h5yr");

            // The query string to send to the authentication site
            NameValueCollection nvc = new NameValueCollection {
                {"clientcallback", callback},
                {"clientstate", state}
            };            

            // Generate the URL for the authentication page
            string oAuthUrl = "http://pieman-auth.azurewebsites.net/auth/OAuth.aspx?" + SocialUtils.NameValueCollectionToQueryString(nvc);

            // Now redirect the user
            Response.Redirect(oAuthUrl);

        }

    }

}