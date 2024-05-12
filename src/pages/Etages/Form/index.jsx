// import {  FormProvider, useForm } from "react-hook-form";
import BasicCard from '../../../components/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextInput } from '../../../components/Inputs/TextInput';
// import { ComboBox } from '../../../components/Inputs/ComboBox';
// import AdornmentInput  from '../../../components/Inputs/AdornmentInput';
import { useForm, useFieldArray } from "react-hook-form";
import { theme } from '../../../utils/style/colors';
// import { useEffect } from 'react';

let renderCount = 0;

// const tranconOptions = [
//   { name: 'coude', params: 'coude', value: 'coude' },
//   { name: 'aaaaa', params: 'yyyyyy', value: 'aaaaa' }
// ];

const EtagesForm = () => {


  const { handleSubmit, control, getValues } = useForm()
  const {
    fields: niveauFields,
    append: appendNiveauField,
    update: updateNiveauField,
    remove: removeNiveauField,
  } = useFieldArray({
    control: control,
    name: "niveau",
  });
  
  const {
    fields: liaisonFields,
    append: appendLiaisonField,
    // update: updateLiaisonField,
    remove: removeLiaisonField,
  } = useFieldArray({
    control: control,
    name: "liaison",
  });


  // useEffect(() => {

  // }, [appendNiveauField, updateNiveauField, removeNiveauField, niveauFields.length]);

    
  // const handleLiaisonFields = () => {

  // }

  const handleNiveauFields = () => {
    const Niveau  = getValues("Niveaux")

    removeNiveauField()
    removeLiaisonField()

    for (let i = 0; i < Niveau; i++) {
      appendNiveauField({ trancon: []}); // you need to initialize an empty array of trancon otherwise in the first render it will not find any niveau.trancon tp map
    }
    for (let j = 0; j < Niveau-1; j++) {
      appendLiaisonField({ [`vitesseEntree`+(j+1)+"&"+(j+2)]: [], [`vitesseSortie`+(j+1)+"&"+(j+2)]: [], [`inertie1`+(j+1)+"&"+(j+2)]: [], [`inertie2`+(j+1)+"&"+(j+2)]: []}); // you need to initialize an empty array of trancon otherwise in the first render it will not find any niveau.trancon tp map
    }

    
  }




  const handleTranconField = (index) => {
    const Trancons = getValues(`niveau.[${index}].fieldname`)

    const tranconArray = Array.from({ length: Trancons }, () => '');
      
      // setValue(`niveau.[${index}].trancon`,  tranconArray)
      
      updateNiveauField(index, {trancon: tranconArray, fieldname: Trancons})
    }
    
  const handleTranconFieldParamsK = (niveauIndex, tranconIndex) => {
    const TranconsParamsK = getValues(`niveau[${niveauIndex}].trancon.[${tranconIndex}].K`)
    let targetedTrancon = niveauFields[niveauIndex].trancon;
    console.log("test", tranconIndex, TranconsParamsK, targetedTrancon)

    targetedTrancon.splice(tranconIndex, 1, TranconsParamsK)
    console.log('updatedTrancon',targetedTrancon)

    updateNiveauField(niveauIndex, { trancon: targetedTrancon })

  }

  const handleTranconFieldParamsI = (niveauIndex, tranconIndex) => {
    const TranconsParamsI = getValues(`niveau[${niveauIndex}].trancon.[${tranconIndex}].I`)
    let targetedTrancon = niveauFields[niveauIndex].trancon;
    console.log("test", tranconIndex, TranconsParamsI, targetedTrancon)

    targetedTrancon.splice(tranconIndex, 1, TranconsParamsI)
    console.log('updatedTrancon',targetedTrancon)

    updateNiveauField(niveauIndex, { trancon: targetedTrancon })

  }

  const onSubmit = (formInputs) => {
    console.log("formInputs", formInputs);
    console.log(formInputs.liaison[0]["vitesseEntree1&2"])

    const GearRatio = parseInt(formInputs.liaison[0]["vitesseEntree1&2"]) / parseInt(formInputs.liaison[0]["vitesseSortie1&2"])
    console.log(GearRatio)
  };
  renderCount++;

  return (
    <BasicCard width="80%"> 
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Typography sx={{ mb: 0.5, fontWeight: 'bold' }} color="#b3e5fc">Form</Typography>
        {/* <span className="counter">Render Count: {renderCount}</span> */}
        <Box display="flex" flexDirection="row" gap='3%' mb={1} flexWrap="wrap" >
          <TextInput
            name="Niveaux"
            label="Nombre de Niveaux" 
            placeholder="Entrer le nombre de Niveaux"
            // defaultValue=''
            width="15rem"
            control={control}
          />
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Button onClick={() => handleNiveauFields()} size="small" sx={{ backgroundColor: theme.palette.second, color: theme.palette.main, fontWeight: "bold", '&:hover': { backgroundColor: theme.palette.forth, color: theme.palette.second}, height: "60%"}}>
              Insert
            </Button>
          </Box>
        </Box>
        {liaisonFields.map((liaison, liaisonIndex) => (
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="left"
              mt={1}
              ml="3%"
              gap='1%'
              flexWrap="wrap"
              key={`${liaison.id}-${liaisonIndex}`}
            >
          <TextInput
            name={`liaison.[${liaisonIndex}].vitesseEntree${liaisonIndex+1}&${liaisonIndex+2}`}
            label={`Entre le vitesse d'entrée entre ${liaisonIndex+1} et ${liaisonIndex+2}`} 
            placeholder="Entrer le vitesse d'entrée"
            // defaultValue=''
            width="18rem"
            ind="tr/min"
            control={control}
          />
          <TextInput
            name={`liaison.[${liaisonIndex}].vitesseSortie${liaisonIndex+1}&${liaisonIndex+2}`}
            label={`Entre le vitesse de sortie entre ${liaisonIndex+1} et ${liaisonIndex+2}`} 
            placeholder="Entrer le vietesse de sortie"
            // defaultValue=''
            width="19rem"
            ind="tr/min"
            control={control}
          />
          <TextInput
            name={`liaison.[${liaisonIndex}].inertie1${liaisonIndex+1}&${liaisonIndex+2}`}
            label={`Entre l'inertie D1 entre ${liaisonIndex+1} et ${liaisonIndex+2}`} 
            placeholder="Entrer le liaison"
            // defaultValue=''
            width="15rem"
            control={control}
          />
          <TextInput
            name={`liaison.[${liaisonIndex}].inertie2${liaisonIndex+1}&${liaisonIndex+2}`}
            label={`Entre l'inertie D2 entre ${liaisonIndex+1} et ${liaisonIndex+2}`} 
            placeholder="Entrer le liaison"
            // defaultValue=''
            width="15rem"
            control={control}
          />
          {/* <Box display="flex" flexDirection="column" justifyContent="center">
            <Button onClick={() => handleLiaisonFields()} size="small" sx={{ backgroundColor: theme.palette.second, color: theme.palette.main, fontWeight: "bold", '&:hover': { backgroundColor: theme.palette.forth, color: theme.palette.second}, height: "60%"}}>
              Insert
            </Button>
          </Box> */}
        </Box>
        ))}
          {niveauFields.map((niveau, indexNiveau) => (
            <>
          <Box display="flex" flexDirection="column" justifyContent="space-around" mb={1}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="left"
              mt={1}
              ml="3%"
              gap='3%'
              flexWrap="wrap"
              key={`${niveau.id}-${indexNiveau}`}
            >
              <TextInput
                name={`niveau.[${indexNiveau}].fieldname`} //without adding .fieldname the name will be passed as an object and not a string
                label={`Nombre de Trancons de Niveau ${indexNiveau+1}`}
                placeholder={`Entre le nombre de Trancons de Niveau ${indexNiveau+1}`}
                // defaultValue=''
                // helperText="Cross section"
                width="21rem"
                control={control}
              />
              <Box display="flex" flexDirection="column" justifyContent="center">
                <Button onClick={() => handleTranconField(indexNiveau)} size="small" sx={{ backgroundColor: theme.palette.second, color: theme.palette.main, fontWeight: "bold", '&:hover': { backgroundColor: theme.palette.forth, color: theme.palette.second}, height: "60%"}}>
                  Insert
                </Button>
              </Box>
            </Box>
            </Box>
              <Box display="flex" flexDirection="column" justifyContent="space-around" mb={1}>
                {niveau.trancon.map((trancon, indexTrancon) => (
                  <Box
                    display="flex"
                    flexDirection="row"
                    mt={1}
                    ml="5%"
                    gap={2}
                    // flexWrap="wrap"
                    key={`${trancon.id}-${indexTrancon}`}
                  >
                    <TextInput
                name={`niveau[${indexNiveau}].trancon.[${indexTrancon}].K`} //without adding .fieldname the name will be passed as an object and not a string
                label={`K de Trancon ${indexTrancon+1} de Niveau ${indexNiveau+1}`}
                placeholder={`Entrer K`}
                // defaultValue=''
                // helperText="Cross section"
                width="14.5rem"
                control={control}
                onChange={() => handleTranconFieldParamsK(indexNiveau, indexTrancon)}
              />
                <TextInput
                name={`niveau[${indexNiveau}].trancon.[${indexTrancon}].I`} //without adding .fieldname the name will be passed as an object and not a string
                label={`I de Trancon ${indexTrancon+1} de Niveau ${indexNiveau+1}`}
                placeholder={`Entrer I`}
                // defaultValue=''
                // helperText="Cross section"
                width="14.5rem"
                control={control}
                onChange={() => handleTranconFieldParamsI(indexNiveau, indexTrancon)}
              />
                            {/* <ComboBox
                control={control}
                name={`niveau[${indexNiveau}].trancon.[${indexTrancon}].param`}
                label={`Trancon ${indexTrancon+1} de Niveau ${indexNiveau+1} `}
                placeholder={`Entre le Trancon ${indexTrancon+1} de Niveau ${indexNiveau+1}`}
                // options={tranconOptions}
                width="16rem"
                onChange={() => handleTranconFieldParams(indexNiveau, indexTrancon)}
              /> */}
                  </Box>
                ))}
              </Box>
        </>
          ))}
        <Box sx={{ display: "flex", justifyContent: "flex-end"}}>

          <Button onClick={handleSubmit(onSubmit)} size="medium" sx={{ ml: 'auto',backgroundColor: theme.palette.second, color: theme.palette.main, fontWeight: "bold", '&:hover': { backgroundColor: theme.palette.forth, color: theme.palette.second}}}>
            Submit
          </Button>
        </Box>
      </form>
    </BasicCard>
  );
};

export default EtagesForm;