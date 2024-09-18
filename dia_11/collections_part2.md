### Coleções (Parte 02)

#### 1. O que são Mapas?
- **Definição**: Mapas em Java são estruturas de dados que armazenam dados em pares de chave-valor, similar a um dicionário.
- **Busca por Chave**: Diferente de vetores, a busca em mapas é feita através da chave, e não da posição.
- **Eficiência**: Essa estrutura é ideal para armazenar e recuperar dados de forma eficiente quando a busca por um valor específico é crucial.

#### 2. Introdução a HashMap e HashTable
- **HashMap**:
  - **Definição**: HashMap é uma implementação da interface `Map` que armazena dados em pares chave-valor.
  - **Sincronização**: Não é sincronizado, o que significa que não é seguro para uso em ambientes com múltiplas threads sem sincronização externa.
  - **Uso Comum**: Ideal para aplicações onde a sincronização não é uma preocupação.
- **HashTable**:
  - **Definição**: HashTable também armazena dados em pares chave-valor.
  - **Sincronização**: É sincronizado, o que significa que é seguro para uso em ambientes com múltiplas threads.
  - **Uso Comum**: Ideal para aplicações onde a sincronização é necessária.

#### 3. HashMap
- **Definição**: HashMap é uma implementação da interface `Map` que armazena dados em pares chave-valor.
- **Eficiência**: A busca em HashMap é feita através da chave, o que torna a recuperação de dados mais eficiente.
- **Principais Métodos**:
  - `new HashMap<>()`: Cria um novo HashMap vazio.
  - `put(key, value)`: Insere um novo par chave-valor no HashMap.
  - `remove(key)`: Remove o par chave-valor associado à chave especificada.
  - `keySet()`: Retorna um conjunto com as chaves do HashMap.
  - `values()`: Retorna uma coleção com os valores do HashMap.
  - `get(key)`: Retorna o valor associado à chave especificada.
  - `containsKey(key)`: Verifica se o HashMap contém a chave especificada.
  - `containsValue(value)`: Verifica se o HashMap contém o valor especificado.
  - `size()`: Retorna o número de pares chave-valor no HashMap.
  - `clear()`: Remove todos os pares chave-valor do HashMap.

#### 4. Exemplo de Uso do HashMap
```java
import java.util.HashMap;

public class ExemploHashMap {
    public static void main(String[] args) {
        // Cria um novo HashMap
        HashMap<String, Integer> mapa = new HashMap<>();

        // Insere pares chave-valor no HashMap
        mapa.put("Maçã", 10);
        mapa.put("Banana", 20);
        mapa.put("Laranja", 30);

        // Recupera e imprime o valor associado à chave "Banana"
        System.out.println("Banana: " + mapa.get("Banana"));

        // Verifica se o HashMap contém a chave "Maçã"
        if (mapa.containsKey("Maçã")) {
            System.out.println("O HashMap contém a chave 'Maçã'.");
        }

        // Remove o par chave-valor associado à chave "Laranja"
        mapa.remove("Laranja");

        // Imprime todas as chaves e valores do HashMap
        for (String chave : mapa.keySet()) {
            System.out.println(chave + ": " + mapa.get(chave));
        }

        // Imprime o número de pares chave-valor no HashMap
        System.out.println("Tamanho do HashMap: " + mapa.size());

        // Limpa o HashMap
        mapa.clear();
        System.out.println("HashMap limpo. Tamanho: " + mapa.size());
    }
}