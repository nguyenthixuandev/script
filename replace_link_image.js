
<script type="application/javascript">
                jQuery(document).ready(function(){
                    function getParamFromURL(t)
                    {
                        var a=new RegExp("[?&]"+t+"=([^&#]*)").exec(window.location.href);
                        return null===a?null:a[1]
                    }

                    setTimeout(function(){
                        if(jQuery('a.tcb-button-link').length > 0){
                            const param = getParamFromURL('utm_campaign');
                            if(param != null){
                                let url = jQuery('a.tcb-button-link').attr('href');
                                let new_url = '';
                                if(url.indexOf('/?') < 0){
                                     new_url = url + '/?tid=' + param
                                }else{
                                     new_url = url + '&tid=' + param
                                }

                                jQuery('a.tcb-button-link').attr('href', new_url);
                            }
                        }

                        if(jQuery('.tve_image_frame > a').length > 0){
                            const param = getParamFromURL('utm_campaign');
                            if(param != null){
                                let url = jQuery('.tve_image_frame > a').attr('href');
                                let new_url = '';
                                if(url.indexOf('/?') < 0){
                                     new_url = url + '/?tid=' + param
                                }else{
                                     new_url = url + '&tid=' + param
                                }

                                jQuery('.tve_image_frame > a').attr('href', new_url);
                            }
                        }

                    }, 1000);
                });
            </script>
