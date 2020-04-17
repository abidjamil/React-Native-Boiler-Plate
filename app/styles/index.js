import { StyleSheet } from 'react-native'
import  { ThemeColors}  from './colors'
  
 const Styles = StyleSheet.create({   
   container: {                       
   
   },
   
  ScrollViewStyle:
  {
   
  },
  MainView:
  {
 
  },
 })

 const Cards = StyleSheet.create(
   {
     LightCard350 :{
      borderRadius: 5,
      padding: 15,
      backgroundColor: ThemeColors.CardBackgroundLight,
      height: 300,
     },
    
     
   }
 )
  
 const Buttons = StyleSheet.create({  
   primary: {                         
        marginTop: 20,
        height: 50,
        backgroundColor:ThemeColors.ThemeColorPrimary,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 16,
        paddingLeft: 16,
        elevation: 5,
        borderRadius: 5,
        shadowOffset: {
            height: 1,
            width: 0
        },
        shadowColor: ThemeColors.ShadowColor,
        shadowOpacity: 0.35,
        shadowRadius: 5
    },
    caption:
    {
        color: 'white',
    },
   
 })
 const Loader = StyleSheet.create({
  LoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    }
  });
 export { Styles, Buttons, Cards, Loader } 