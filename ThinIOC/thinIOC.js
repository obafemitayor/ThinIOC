var IOCContainer =
    {
        GetService: function (type)
        {
            var servicetype = null;
            for (var i = 0; i < registry.length; i++) {
                if (registry[i].For == type) {
                    servicetype = registry[i].Use;
                }
                break;
            }
            return servicetype;
        },
        Singleton : function (type)
        {
            //To Be Implemented
        },
        Transient : function (type)
        {
            //To Be Implemented
        }
    }