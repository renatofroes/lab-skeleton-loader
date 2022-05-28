/* ================================== 
ESTUDO DE LOADER SKELETON - FACEBOOK
AUTOR => MARS STUDIO
WWW.MARRS.COM.BR
================================== */

(function(doc) {
    doc.onreadystatechange = () => {
        if (doc.readyState === 'complete') {
            $('.skeleton-bar').removeClass('skeleton-bar');
        }
    };
})(document);