<template>
  <div>
    <!-- Modal to add new book -->
    <b-modal id="add-book" size="lg">
      <template v-slot:modal-header>
        <h5>Registro de nuevo libro</h5>
        <button
          type="button"
          @click="closeModalSave()"
          class="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </template>
      <b-row>
        <b-col cols="6">
          <b-form-group>
            <template slot="label">
              Autor
              <span class="text-danger">*</span>
            </template>
            <b-form-input
              id="input-autor"
              v-model="bookForm.autor"
              :state="autorState"
              aria-describedby="autor-feedback"
              placeholder="Ingresa nombre del autor"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <template slot="label">
              Edición
              <span class="text-danger">*</span>
            </template>
            <b-form-input
              v-model="bookForm.edicion"
              :state="editionState"
              placeholder="Ingresa edición"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <template slot="label">
              Tipo de contenido
              <span class="text-danger">*</span>
            </template>
            <b-form-input
              v-model="bookForm.tipo_contenido"
              :state="typeContentState"
              aria-describedby="tipo_contenido-feedback"
              placeholder="Ingresa el tipo contenido"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Materia">
            <template slot="label">
              Materia
              <span class="text-danger">*</span>
            </template>
            <b-form-input
              v-model="bookForm.materia"
              :state="subjectState"
              aria-describedby="materia-feedback"
              placeholder="Ingresa la materia"
              trim
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group>
            <template slot="label">
              Título
              <span class="text-danger">*</span>
            </template>
            <b-form-input
              v-model="bookForm.titulo"
              :state="titleState"
              aria-describedby="titulo-feedback"
              placeholder="Ingresa título"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <template slot="label">
              Datos de publicación
              <span class="text-danger">*</span>
            </template>
            <b-form-input
              v-model="bookForm.datos_publicacion"
              :state="publicationDataState"
              aria-describedby="datos_publicacion-feedback"
              placeholder="Ingresa los datos de publicación"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <template slot="label">
              Restricciones
              <span class="text-danger">*</span>
            </template>
            <b-form-input
              v-model="bookForm.restricciones"
              :state="restrictionsState"
              aria-describedby="restricciones-feedback"
              placeholder="Ingresa las restricciones"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <template slot="label">
              Proveedor
              <span class="text-danger">*</span>
            </template>
            <b-form-input
              v-model="bookForm.proveedor"
              :state="providerState"
              aria-describedby="proveedor-feedback"
              placeholder="Ingresa nombre de proveedor"
              trim
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <template v-slot:modal-footer>
        <b-button pill variant="secondary" @click="closeModalSave()"
          >Cancelar
        </b-button>
        <b-button
          @click="saveBook()"
          pill
          variant="primary"
          :disabled="
            autorState === null ||
            editionState === null ||
            typeContentState === null ||
            subjectState === null ||
            titleState === null ||
            publicationDataState === null ||
            restrictionsState === null ||
            providerState === null
          "
          >Guardar
        </b-button>
      </template>
    </b-modal>
    <!-- Modal to update book -->
    <b-modal id="update-book" size="lg">
      <template v-slot:modal-header>
        <h5>Editar libro</h5>
        <button
          type="button"
          @click="closeModalUpdate()"
          class="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </template>
      <b-row>
        <b-col cols="6">
          <b-form-group>
            <template slot="label">
              Autor
              <span class="text-danger">*</span>
            </template>
            <b-form-input
              id="input-autor"
              v-model="updateForm.autor"
              :state="autorState"
              aria-describedby="autor-feedback"
              placeholder="Ingresa nombre del autor"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <template slot="label">
              Edición
              <span class="text-danger">*</span>
            </template>
            <b-form-input
              v-model="updateForm.edicion"
              :state="editionState"
              placeholder="Ingresa edición"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <template slot="label">
              Tipo de contenido
              <span class="text-danger">*</span>
            </template>
            <b-form-input
              v-model="updateForm.tipo_contenido"
              :state="typeContentState"
              aria-describedby="tipo_contenido-feedback"
              placeholder="Ingresa el tipo contenido"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Materia">
            <template slot="label">
              Materia
              <span class="text-danger">*</span>
            </template>
            <b-form-input
              v-model="updateForm.materia"
              :state="subjectState"
              aria-describedby="materia-feedback"
              placeholder="Ingresa la materia"
              trim
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group>
            <template slot="label">
              Título
              <span class="text-danger">*</span>
            </template>
            <b-form-input
              v-model="updateForm.titulo"
              :state="titleState"
              aria-describedby="titulo-feedback"
              placeholder="Ingresa título"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <template slot="label">
              Datos de publicación
              <span class="text-danger">*</span>
            </template>
            <b-form-input
              v-model="updateForm.datos_publicacion"
              :state="publicationDataState"
              aria-describedby="datos_publicacion-feedback"
              placeholder="Ingresa los datos de publicación"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <template slot="label">
              Restricciones
              <span class="text-danger">*</span>
            </template>
            <b-form-input
              v-model="updateForm.restricciones"
              :state="restrictionsState"
              aria-describedby="restricciones-feedback"
              placeholder="Ingresa las restricciones"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <template slot="label">
              Proveedor
              <span class="text-danger">*</span>
            </template>
            <b-form-input
              v-model="updateForm.proveedor"
              :state="providerState"
              aria-describedby="proveedor-feedback"
              placeholder="Ingresa nombre de proveedor"
              trim
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <template v-slot:modal-footer>
        <b-button pill variant="secondary" @click="closeModalUpdate()"
          >Cancelar
        </b-button>
        <b-button
          @click="updateBook()"
          pill
          variant="primary"
          :disabled="
            autorState === null ||
            editionState === null ||
            typeContentState === null ||
            subjectState === null ||
            titleState === null ||
            publicationDataState === null ||
            restrictionsState === null ||
            providerState === null
          "
          >Guardar
        </b-button>
      </template>
    </b-modal>
    <!-- Header component -->
    <Header />
    <b-container class="mt-3">
      <div class="row">
        <div class="col-12">
          <b-button
            class="float-right mb-3"
            variant="outline-primary"
            v-b-modal.add-book
            >Agregar libro</b-button
          >
        </div>
        <!-- Table component -->
        <div class="col-12">
          <b-card class="container-card">
            <Table
              v-if="bookList.length > 0"
              :bookList="bookList"
              :fields="fields"
              @deleteBook="deleteBook"
              @getBook="getBook"
            />
            <div v-if="bookList.length === 0" class="text-center">
              <h5>Bienvenido, registra un libro :D</h5>
            </div>
          </b-card>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';
import Table from '@/components/Table.vue';
import { Book } from '@/models/BookEntity';

export default Vue.extend({
  components: {
    Header,
    Table,
  },
  data() {
    return {
      bookList: [] as Book[],
      fields: [
        'autor',
        'titulo',
        'titulo',
        'edicion',
        'datos_publicacion',
        'tipo_contenido',
        'restricciones',
        'materia',
        'proveedor',
        'funciones',
      ],
      bookForm: {
        autor: '',
        titulo: '',
        edicion: '',
        datos_publicacion: '',
        tipo_contenido: '',
        restricciones: '',
        materia: '',
        proveedor: '',
      } as Book,
      updateForm: {
        autor: '',
        titulo: '',
        edicion: '',
        datos_publicacion: '',
        tipo_contenido: '',
        restricciones: '',
        materia: '',
        proveedor: '',
      } as Book,
      indexBook: 0 as number,
    };
  },
  computed: {
    autorState(): boolean | null {
      if (this.bookForm.autor) {
        return this.bookForm.autor != '' ? true : null;
      } else return this.updateForm.autor != '' ? true : null;
    },
    editionState(): boolean | null {
      if (this.bookForm.edicion) {
        return this.bookForm.edicion != '' ? true : null;
      } else return this.updateForm.edicion != '' ? true : null;
    },
    typeContentState(): boolean | null {
      if (this.bookForm.tipo_contenido) {
        return this.bookForm.tipo_contenido != '' ? true : null;
      } else return this.updateForm.tipo_contenido != '' ? true : null;
    },
    subjectState(): boolean | null {
      if (this.bookForm.materia) {
        return this.bookForm.materia != '' ? true : null;
      } else return this.updateForm.materia != '' ? true : null;
    },
    titleState(): boolean | null {
      if (this.bookForm.titulo) {
        return this.bookForm.titulo != '' ? true : null;
      } else return this.updateForm.titulo != '' ? true : null;
    },
    publicationDataState(): boolean | null {
      if (this.bookForm.datos_publicacion) {
        return this.bookForm.datos_publicacion != '' ? true : null;
      } else return this.updateForm.datos_publicacion != '' ? true : null;
    },
    restrictionsState(): boolean | null {
      if (this.bookForm.restricciones) {
        return this.bookForm.restricciones != '' ? true : null;
      } else return this.updateForm.restricciones != '' ? true : null;
    },
    providerState(): boolean | null {
      if (this.bookForm.proveedor) {
        return this.bookForm.proveedor != '' ? true : null;
      } else return this.updateForm.proveedor != '' ? true : null;
    },
  },
  methods: {
    saveBook() {
      const obj = { ...this.bookForm };
      this.bookList.push(obj);
      this.$swal.fire({
        icon: 'success',
        text: 'El libro se registro correctamente',
        timer: 7000,
      });
      this.closeModalSave();
    },
    deleteBook(id: number) {
      this.$swal
        .fire({
          text: '¿Seguro que desea eliminar este libro?',
          icon: 'warning',
          confirmButtonColor: '#dc3545',
          cancelButtonColor: '#6c757d',
          confirmButtonText: 'Eliminar',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
        })
        .then((result) => {
          if (result.isConfirmed === true) {
            this.bookList.splice(id, 1);
            this.$swal.fire({
              icon: 'success',
              text: 'El libro se elimino correctamente',
              timer: 7000,
            });
          }
        });
    },
    getBook(id: number) {
      this.indexBook = id;
      this.updateForm = { ...this.bookList[id] };
      this.$bvModal.show('update-book');
    },
    updateBook() {
      this.bookList = this.bookList.map((obj, index) => {
        if (index === this.indexBook) {
          return this.updateForm;
        }
        return obj;
      });
      this.$bvModal.hide('update-book');
      this.$swal.fire({
        icon: 'success',
        text: 'El libro se ha actualizado correctamente',
        timer: 7000,
      });
    },
    closeModalSave() {
      this.bookForm.autor = '';
      this.bookForm.titulo = '';
      this.bookForm.edicion = '';
      this.bookForm.datos_publicacion = '';
      this.bookForm.tipo_contenido = '';
      this.bookForm.restricciones = '';
      this.bookForm.materia = '';
      this.bookForm.proveedor = '';
      this.$bvModal.hide('add-book');
    },
    closeModalUpdate() {
      this.updateForm.autor = '';
      this.updateForm.titulo = '';
      this.updateForm.edicion = '';
      this.updateForm.datos_publicacion = '';
      this.updateForm.tipo_contenido = '';
      this.updateForm.restricciones = '';
      this.updateForm.materia = '';
      this.updateForm.proveedor = '';
      this.$bvModal.hide('update-book');
    },
  },
});
</script>
<style scoped>
.container-card {
  border: none;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 8%) !important;
  border-radius: 0rem 1rem 1rem 1rem;
}
</style>
