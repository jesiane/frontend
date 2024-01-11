import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  form?: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
   // private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.form = this.formBuilder.group({
      //nome: ['', [Validators.required, Validators.minLength(3)]],
      //email: ['', [Validators.required, Validators.email]],
      //senha: ['', [Validators.required, Validators.minLength(6)]],
      //confirmarSenha: ['', [Validators.required, Validators.minLength(6)]],
    //});
  }

  campoEstaInvalido(nome: string) {
    return this.form!.get(nome)!.touched && this.form!.get(nome)!.invalid;
  }

  registrar() {
    //if (this.form?.invalid) {
      //const erros = this.form.validate();

      //for (let erro of erros) this.toastrService.warning(erro);

      return;
    }

    //this.authService.registrar(this.form?.value).subscribe({
      //next: (res) => this.processarSucesso(res),
      //error: (err) => this.processarFalha(err),
    //});
  }

  //processarSucesso(res: TokenViewModel) {
    //this.toastrService.success(
      //'Seja bem-vindo, ' + res.usuarioToken.nome + '!',
      //'Sucesso'
    //);

    //this.router.navigate(['/dashboard']);
 // }

  //processarFalha(err: Error) {
    //this.toastrService.error(err.message, 'Erro');
  //}
//}
