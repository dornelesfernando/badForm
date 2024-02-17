using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Jogador : MonoBehaviour
{
    public Rigidbody2D rb;
    public float forcaPulo;
    public LayerMask layerChao;
    public float minAlturaChao = 1;
    private bool estaNoChao;
    public float pontos;
    private float highscore;
    public float multiplicadorPontos = 1;
    public Text pontosText;
    public Text highscoreText;
    public Animator animatorComponent;
    public AudioSource pularAudioSource;
    public AudioSource oneHundredPointsAudioSource;
    public AudioSource deathAudioSource;
    public GameObject reiniciarButton;
    public Jogo jogoScript;

    public GameObject geradorInimigos;
    public Text text1;
    public Text text2;
    public Text text3;
    public Text text4;
    public Text text5;
    public Text text6;
    public Text text7;   


    private bool death = false;
    private void Start()
    {
        highscore = PlayerPrefs.GetFloat("HIGHSCORE");
        highscoreText.text = $"Hi {Mathf.FloorToInt(highscore)}";
    }
    // Update is called once per frame
    void Update()
    {
        pontos += Time.deltaTime * multiplicadorPontos;

        var pontosInt = Mathf.FloorToInt(pontos);
        pontosText.text = pontosInt.ToString();


        if (pontosInt > 0
            && pontosInt % 100 == 0
            && !oneHundredPointsAudioSource.isPlaying)
        {
            oneHundredPointsAudioSource.Play();
        }
        if (Input.GetKeyDown(KeyCode.UpArrow) || Input.GetKeyDown(KeyCode.Space) || Input.GetKeyDown(KeyCode.W))
        {
            Pular();
        }

        if (Input.GetKeyDown(KeyCode.C)) Cair();

        if (Input.GetKeyDown(KeyCode.DownArrow) || Input.GetKeyDown(KeyCode.S) || Input.GetKeyDown(KeyCode.C)) Agaixar();
        else if (Input.GetKeyUp(KeyCode.DownArrow) || Input.GetKeyUp(KeyCode.S) || Input.GetKeyDown(KeyCode.C)) Levantar();

        if (Input.GetKeyDown(KeyCode.Space) && death || Input.GetKeyDown(KeyCode.Return) && death)
        {
            jogoScript.ReiniciarJogo();
        }

        //pontos

        if(pontos > 30){
            text4.text = "Uma PESSOA facilmente passaria de 200 pontos nesse joguinho";
            text5.text = "PESSOA";
        }

        if(pontos > 80){
            text6.text = "Já um robô...";
        }

        if(pontos > 100){
            text7.text = "...eu acho que não";
        }

        if(Input.GetKeyDown(KeyCode.Return)){
            pontos = 200;
        }

        if(pontos >= 200){
            geradorInimigos.SetActive(false);
            text4.text = "";
            text5.text = "";
            text6.text = "";
            text7.text = "";
            text1.text = "Parabéns";
        }
        if(pontos >= 225) text2.text = "Parece que você realmente não é um robô!";
        if(pontos >= 250) {
            Application.ExternalCall("desbloquearBotao");
            text3.text = "Estou de olho...";
        }
        if(pontos > 280) {
            Time.timeScale = 0;
        }
    }

    void Pular()
    {
        if (estaNoChao)
        {
            rb.AddForce(Vector2.up * forcaPulo);
            pularAudioSource.Play();
        }
    }

    void Cair(){
        if(!estaNoChao){
            rb.AddForce(Vector2.down * forcaPulo);
        }
    }

    private void Agaixar()
    {
        animatorComponent.SetBool("Abaixado", true);
    }

    private void Levantar()
    {
        animatorComponent.SetBool("Abaixado", false);
    }

    private void FixedUpdate()
    {
        estaNoChao = Physics2D.Raycast(transform.position, Vector2.down, minAlturaChao, layerChao);
    }

    private void OnCollisionEnter2D(Collision2D other)
    {   
        if (other.gameObject.CompareTag("Inimigos"))
        {
            death = true;

            if (highscore < pontos)
            {
                highscore = pontos;

                PlayerPrefs.SetFloat("HIGHSCORE", highscore);
            }
            deathAudioSource.Play();

            reiniciarButton.SetActive(true);

            Time.timeScale = 0;
        }

    }
}