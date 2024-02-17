using System.Collections;
using System.Collections.Generic;
using UnityEngine.SceneManagement;
using UnityEngine;

public class Jogo : MonoBehaviour
{
    public float modificadorVelocidade = 1f;
    public float velocidade = 4.5f;
    public float velocidadeMaxima = 10f;
    public Jogador jogadorScript;

    private void Update()
    {   
        if(jogadorScript.pontos > 125){
            velocidade = Mathf.Clamp(
            velocidade + 6 * Time.deltaTime,
            0,
            100
            );
        }else{
            velocidade = Mathf.Clamp(
            velocidade + modificadorVelocidade * Time.deltaTime,
            0,
            10
            );
        }
    }

    public void ReiniciarJogo()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);

        Time.timeScale = 1;
    }
}
